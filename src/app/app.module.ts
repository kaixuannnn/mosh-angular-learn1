import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { EmailService } from './email.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { CapitalizePipeComponent } from './capitalize-pipe/capitalize-pipe.component';
import { TitleCasePipe } from './title-case.pipe';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UdemyCoursesComponent } from './udemy-courses/udemy-courses.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SignupFormComponent,
    ContactFormComponent,
    AuthorsComponent,
    SummaryPipe,
    FavouriteComponent,
    CapitalizePipeComponent,
    TitleCasePipe,
    BootstrapPanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    UdemyCoursesComponent,
  ],
  providers: [CoursesService, EmailService],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
})
export class AppModule {}
