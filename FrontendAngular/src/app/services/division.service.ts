import { Injectable } from '@angular/core';
import { Division } from '../models/division.model';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  divisions : Division[] = [];

  loadDivisions(divisions: Division[]){
    this.divisions = divisions;
  }

  getDivision(id: number): string {
    if (id <= 0 ) {
      return "";
    }
    return this.divisions.filter(x => x.id == id)[0].name;
  }

  getAllDivisions(): Division[] {
    return this.divisions;
  }
  constructor() { }
}
