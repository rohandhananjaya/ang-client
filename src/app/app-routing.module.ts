import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesViewComponent } from './employees-view/employees-view.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
  {path: '', component: EmployeesViewComponent, pathMatch: 'full'},
  {path: 'attendance', component: AttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
