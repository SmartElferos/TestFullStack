import { Injectable } from '@angular/core';
import { DIVISIONS } from "../mocked/division.mocked";
import { Division } from '../models/division.model';

@Injectable({
  providedIn: 'root'
})
export class DivisionsService {

  getDivision(id: number): string {
    // const division: string = DIVISIONS.find(element => element.id = id);
    return DIVISIONS.filter(x => x.id == id)[0].name;
  }

  getAllDivisions(id: number): Division[] {
    // const division: string = DIVISIONS.find(element => element.id = id);
    return DIVISIONS;
  }
  constructor() { }
}
