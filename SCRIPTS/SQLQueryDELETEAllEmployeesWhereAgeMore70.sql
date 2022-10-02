DELETE FROM employees
WHERE datediff (YEAR,DateOfBirth,getDate()) > 70
