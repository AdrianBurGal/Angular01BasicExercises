import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {EmployeeService} from "../../service/employee.service";
import {FormsModule} from "@angular/forms";
import {Employee} from "../../models/Employee";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [NgForOf, AsyncPipe, FormsModule],
  templateUrl: './ex09.component.html'
})
export class Ex09Component implements OnInit {
  employeeService = inject(EmployeeService);
  employees: Observable<Employee[]> | undefined;
  criteria: keyof Employee = "name";

  constructor() {
  }

  ngOnInit(): void {
    this.employees = this.employeeService.getListEmployee();
    this.sortEmployees();
  }

  sortEmployees() {
    this.employees = this.employeeService.getListEmployee()
      .pipe(
        map(employees => {
          return employees.sort((e1: Employee, e2: Employee) => e1[this.criteria] > e2[this.criteria] ? 1 : -1);
        })
      );
  }
}

