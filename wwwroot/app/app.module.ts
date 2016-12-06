import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonService } from './person.service';
import { BookReviewService } from './bookreview.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule],
    declarations: [AppComponent],
    providers: [
        PersonService,
        BookReviewService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { 
}