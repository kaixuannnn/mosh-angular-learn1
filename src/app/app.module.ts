import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { EmailService } from './email.service';
import { FormsModule } from '@angular/forms';
import { FavouriteComponent } from './favourite/favourite.component';
import { CapitalizePipeComponent } from './capitalize-pipe/capitalize-pipe.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    FavouriteComponent,
    CapitalizePipeComponent,
    TitleCasePipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [CoursesService, EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
