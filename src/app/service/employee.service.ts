import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Employee} from "../models/Employee";

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  getListEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`assets/EMPLOYEE_LIST.json`);
  }

  getEmployeeByName(name: String): Observable<Employee | undefined> {
    return this.getListEmployee().pipe(
      map(employees => employees.find(employee => employee.name === name))
    );
  }

}
