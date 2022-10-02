SELECT Id, DivisionId, Surname, Name, Patronymic, DateOfBirth, DateOfEmployment, Wage, datediff (YEAR,DateOfBirth,getDate()) AS Age
FROM employees
WHERE datediff (YEAR,DateOfBirth,getDate()) > 70
