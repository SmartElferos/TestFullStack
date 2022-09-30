using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestFullstack.Data;

namespace TestFullstack
{
    public class Startup
    {
        readonly string allowSpecificOrigins = "_allowSpecificOrigins";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(); // добавляем сервисы CORS

            services.AddDbContext<EmployeeDBContext>(opt => opt.UseSqlServer
                (Configuration.GetConnectionString("EmployeeConnection")));

            services.AddControllers();

            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            //services.AddScoped<IEmployeeRepo, MockEmployeeRepo>();
            services.AddScoped<IEmployeeRepo, SqlEmployeeRepo>();

            services.AddCors(options =>

            {

                options.AddPolicy(allowSpecificOrigins,

                builder =>

                {

                    builder.WithOrigins("http://localhost:4200", 
                                        "http://localhost:5000",
                                        "http://localhost:5000/api/employee",
                                        "https://localhost:5001")

                            .AllowAnyHeader()

                            .AllowAnyMethod();

                });

            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            string allowSpecificOrigins = "_allowSpecificOrigins";

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseRouting();
            
            //app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            app.UseCors(allowSpecificOrigins);
            
            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
