import { Injectable } from '@angular/core';
import { DIVISIONS } from "../mocked/division.mocked";
import { Division } from '../models/division.model';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  getDivision(id: number): string {
    // const division: string = DIVISIONS.find(element => element.id = id);
    if (id <= 0 ) {
      return "";
    }
    return DIVISIONS.filter(x => x.id == id)[0].name;
  }

  getAllDivisions(): Division[] {
    // const division: string = DIVISIONS.find(element => element.id = id);
    return DIVISIONS;
  }
  constructor() { }
}
