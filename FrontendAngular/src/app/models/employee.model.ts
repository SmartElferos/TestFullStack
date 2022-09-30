export interface Employee {
  id : number;
  divisionId : number;
  surname : string;
  name : string;
  patronymic : string;
  dateOfBirth?: Date;
  dateOfEmployment?: Date;
  wage : number;
}
