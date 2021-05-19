import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
