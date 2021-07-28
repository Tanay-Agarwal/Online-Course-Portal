import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CourseEnrollComponent } from './course-enroll/course-enroll.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';
import { TestComponent } from './test/test.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'registeration/new', component: RegisterationFormComponent},
  { path: 'feedback/new', component: FeedbackFormComponent},
  { path: 'contact/new', component: ContactFormComponent},
  { path: 'contact', component: ContactListComponent},
  { path: 'course/new', component: CourseFormComponent},
  { path: 'course', component: CourseListComponent},
  { path: 'feedback', component: FeedbackListComponent},
  { path: 'users', component: UserListComponent},
  { path: 'enroll-course', component: CourseEnrollComponent},
  { path: 'test', component: TestComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
