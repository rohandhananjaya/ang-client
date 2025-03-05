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

  constructor(private employeeService: EmployeeApiService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  async getEmployees() {
    await this.employeeService.getEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (err) => console.error('Error fetching employees:', err)
    });
  }
}
