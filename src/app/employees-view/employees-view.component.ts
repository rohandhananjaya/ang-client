import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../services/employee-api.service';
import { Employee } from '../interfaces/employee';
@Component({
  selector: 'app-employees-view',
  templateUrl: './employees-view.component.html',
  styleUrls: ['./employees-view.component.css']
})
export class EmployeesViewComponent implements OnInit {

  employees: Employee[] = [];
  employee: Employee | undefined;
  isListLoading = true;
  isIndividualLoading = false;
  employeeId: number = 0;

  constructor(private employeeService: EmployeeApiService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  async getEmployees() {
    await this.employeeService.getEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
        this.isListLoading = false;
      },
      error: (err) => console.error('Error fetching employees:', err)
    });
  }

  //search
  async searchEmployees() {
    this.isIndividualLoading = true;
    this.employee = undefined;
    await this.employeeService.getEmployee(this.employeeId).subscribe({
      next: (employee) => {
        this.employee = employee;
        this.isIndividualLoading =  false;
      },
      error: (err) => console.error('Error fetching employee:', err)
    });
  }
}
