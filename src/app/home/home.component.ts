import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('inFromLeft', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateX(-300px)'
      })),
      transition('* => show', [
        style({
          opacity: 0,
          transform: 'translateX(-300px)'
        }),
        animate(600)
      ])
    ]),
    trigger('inFromRight', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateX(300px)'
      })),
      transition('* => show', [
        style({
          opacity: 0,
          transform: 'translateX(300px)'
        }),
        animate(600)
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  backgroundUrl: string = '../../../assets/images/wasatch-front.jpg';
  pianoUrl: string = '../../../assets/images/piano-keys.jpg';
  scrollPosition: number = 0;
  showLeftScroll: boolean = false;
  showRightScroll: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAppear(side) {
    if (side === 'left') this.showLeftScroll = true;
    if (side === 'right') this.showRightScroll = true;
  }

}
