import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MarkTypesComponent } from './mark-types/mark-types.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsRComponent } from './subjects-r/subjects-r.component';
import { SubjectsVComponent } from './subjects-v/subjects-v.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassesComponent } from './classes/classes.component';

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'subjectsV', component: SubjectsVComponent },
  { path: 'subjectsr', component: SubjectsRComponent },
  { path: 'mark-types', component: MarkTypesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'classes', component: ClassesComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
