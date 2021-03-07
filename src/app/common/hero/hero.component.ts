import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('headerEnter', [
      state('in', style({
        opacity: 0.75,
        transform: 'translateY(0)'
      })),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-30px)'
        }),
        animate(600)
      ])
    ])
  ]
})
export class HeroComponent implements OnInit {

  @Input() isHome: boolean;
  @Input() backgroundUrl: string;
  @Input() title: string;
  @Input() subtitle: string;

  styleString: string;

  constructor() { }

  ngOnInit(): void {
    this.styleString = `
      background-image: url('${this.backgroundUrl}');
      height: ${this.isHome ? '100vh' : '80vh'};
    `;
  }

}
