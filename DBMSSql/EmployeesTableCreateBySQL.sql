USE [EmployeeDB]
GO

/****** Object:  Table [dbo].[Employees]    Script Date: 02.10.2022 18:40:39 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Employees](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[DivisionId] [int] NOT NULL,
	[Surname] [nvarchar](max) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Patronymic] [nvarchar](max) NOT NULL,
	[DateOfBirth] [datetime2](7) NOT NULL,
	[DateOfEmployment] [datetime2](7) NOT NULL,
	[Wage] [real] NOT NULL,
 CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Divisions_DivisionId] FOREIGN KEY([DivisionId])
REFERENCES [dbo].[Divisions] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Divisions_DivisionId]
GO


