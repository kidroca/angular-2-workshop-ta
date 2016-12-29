import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'mvdb-rating',
    template: `
        <span class="rating" placement="top" ngbTooltip="{{rating}}">
            <span *ngFor="let i of stars" 
                  class="star" 
                  [class.active]="i <= roundRating">&#9733;</span>
        </span>
    `,
    styles: [`
        .star {
            color: #efefef;
            font-size: 2rem;
            transition: color 400ms ease-in-out;
        }
        .star.active {
            color: #FFD600;
        }
    `]
})
export class RatingComponent implements OnInit {

    @Input() totalStars: number = 5;
    @Input() rating: number;

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
