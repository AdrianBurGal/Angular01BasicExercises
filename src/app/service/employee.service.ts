import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {Employee} from "../models/Employee";

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  employees: Observable<Employee[]>;

  constructor(private http: HttpClient) {
    this.employees = this.http.get<Employee[]>(`assets/EMPLOYEE_LIST.json`)
  }

  getListEmployee(): Observable<Employee[]> {
    return this.employees;
  }

  getEmployeeByName(name: String): Observable<Employee | undefined> {
    return this.getListEmployee().pipe(
      map(employees => employees.find(employee => employee.name === name))
    );
  }

  addEmployee(employee: Employee) {
    this.getListEmployee().subscribe(employees => {
      if (this.employees) {
        this.employees.subscribe(employees => {
          employees.push(employee);
          this.employees = of(employees);
        });
      }
    });
  }

}
