import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsRComponent } from './subjects-r/subjects-r.component';
import { SubjectsVComponent } from './subjects-v/subjects-v.component';

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: 'students', component: StudentsComponent},
  { path: 'subjectsV', component: SubjectsVComponent },
  { path: 'subjectsr', component: SubjectsRComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
