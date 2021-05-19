import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { SubjectsRComponent } from './subjects-r/subjects-r.component';

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: 'subjectsr', component: SubjectsRComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
