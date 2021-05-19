import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SubjectsRComponent } from './subjects-r/subjects-r.component';

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: 'subjectsr', component: SubjectsRComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
