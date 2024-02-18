import {Component, inject} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './ex09.component.html'
})
export class Ex09Component {
  private employeeService = inject(EmployeeService);
  employees = this.employeeService.getListEmployee();

  constructor() { }

  ngOnInit(): void {
  }
}

