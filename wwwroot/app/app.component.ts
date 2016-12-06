import { Component, OnInit } from '@angular/core';
import { PersonService, Person } from './person.service';
import { BookReviewService, BookReview } from './bookreview.service';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2</h1>
    <ul>
    <li *ngFor="let person of persons">
    fro: {{person.name}}<br>
    date of birth: {{person.dob}}<br>
    city: {{person.city}} 
    </li>
    </ul>
    <ul>
        <li *ngFor="let bookreview of bookreviews">

        author: {{ bookreview.author }}<br>
        </li>
    </ul> 
    `,
    providers: [
        PersonService,
        BookReviewService
    ]
})
export class AppComponent extends OnInit {

    constructor(private _service: PersonService, private _bookReviewService: BookReviewService) {
        super();
    }

    generateArray(obj){
        return Object.keys(obj).map((key)=>{ return obj[key]});
    }

    ngOnInit() {
        this._service.loadData().then(data => {
            this.persons = data;
        });
        this._bookReviewService.loadData().then(data => { 
            this.bookreviews = data;

        });
    }

    persons: Person[] = [];
    bookreviews: BookReview[] = [];
}