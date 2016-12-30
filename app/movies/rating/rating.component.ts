import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'mvdb-rating',
    templateUrl: 'rating.component.html',
    styleUrls: ['rating.component.less']
})
export class RatingComponent implements OnInit {

    @Input() totalStars: number = 5;
    @Input() rating: number = 0;
    @Input() votes: number = 0;

    stars: number[];

    constructor() {}

    get roundRating(): number {

        return Math.round(this.rating);
    }

    ngOnInit(): void {

        this.stars = [];

        for (let i = 1; i <= this.totalStars; i++) {
            this.stars.push(i);
        }
    }
}
