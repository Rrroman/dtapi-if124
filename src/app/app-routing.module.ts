import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { SubjectsVComponent } from './subjects-v/subjects-v.component';

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: 'subjectsV', component: SubjectsVComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
