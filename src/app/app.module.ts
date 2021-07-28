import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { GeneralServiceService } from 'src/service/general-service.service';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatButtonModule} from '@angular/material/button';
import { CourseFormComponent } from './course-form/course-form.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { Test1Component } from './test1/test1.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { UserListComponent } from './user-list/user-list.component';
import {MatTableModule} from '@angular/material/table';
import { CourseEnrollComponent } from './course-enroll/course-enroll.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterationFormComponent,
    ContactFormComponent,
    FeedbackFormComponent,
    CourseFormComponent,
    TestComponent,
    Test1Component,
    ContactListComponent,
    FeedbackListComponent,
    CourseListComponent,
    UserListComponent,
    CourseEnrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    NgbModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [GeneralServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
