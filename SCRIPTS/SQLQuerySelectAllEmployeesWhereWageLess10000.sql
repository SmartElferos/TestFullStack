SELECT Id, DivisionId, Surname, Name, Patronymic, DateOfBirth, DateOfEmployment, Wage, datediff (YEAR,DateOfBirth,getDate()) AS Age
FROM Employees
WHERE datediff (YEAR,DateOfBirth,getDate())>70
