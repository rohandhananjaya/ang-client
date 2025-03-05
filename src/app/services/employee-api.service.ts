import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';
import { Attendance } from '../interfaces/attendance';
import { AttendanceCreate } from '../interfaces/attendance-create';

const API_BASE_URL = 'https://localhost:7152/api';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  
  constructor(private http: HttpClient) { }

  // Employee endpoints
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${API_BASE_URL}/employees`);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${API_BASE_URL}/employees/${id}`);
  }

  // Attendance endpoints
  getEmployeeAttendance(
    id: number,
    start?: Date,
    end?: Date
  ): Observable<Attendance[]> {
    let params = new HttpParams();

    if (start) {
      params = params.set('start', start.toISOString());
    }

    if (end) {
      params = params.set('end', end.toISOString());
    }

    return this.http.get<Attendance[]>(
      `${API_BASE_URL}/employees/${id}/attendance`,
      { params }
    );
  }

  createAttendance(id: number, attendanceData: AttendanceCreate): Observable<Attendance> {
    return this.http.post<Attendance>(
      `${API_BASE_URL}/employees/${id}/attendance`,
      attendanceData
    );
  }
}
