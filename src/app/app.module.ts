import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { TokenInterceptor } from 'src/app/interceptors/token.interceptor';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SubjectsRComponent } from './subjects-r/subjects-r.component';
import { SubjectsVComponent } from './subjects-v/subjects-v.component';
import { LoginComponent } from './login/login.component';
import { DialogChangeComponent } from './subjects-v/dialog-change/dialog-change.component';
import { StudentsComponent } from './students/students.component';
import { DialogOverviewComponent } from './subjects-r/dialog-overview/dialog-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ClassesComponent } from './classes/classes.component';
import { DialogWindowComponent } from './classes/modalWindow/dialog-window/dialog-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    LoginComponent,
    SubjectsRComponent,
    SubjectsVComponent,
    DialogOverviewComponent,
    StudentsComponent,
    DialogChangeComponent,
    DashboardComponent,
    HeaderComponent,
    MenuComponent,
    HomepageComponent,
    ClassesComponent,
    DialogWindowComponent,
  ],
  entryComponents: [DialogOverviewComponent, DialogWindowComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
