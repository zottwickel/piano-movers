import { Component, HostListener, HostBinding, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export interface Link {
  outlet: string;
  text: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('hideShow', [
      state('show', style({
        marginTop: '0px'
      })),
      state('hide', style({
        marginTop: '-56px'
      })),
      transition('show => hide', [
        animate('0.3s')
      ]),
      transition('hide => show', [
        animate('0.3s')
      ])
    ])
  ]
})
export class NavComponent implements OnInit {

  isHidden: boolean = true;
  screenWidth: number = window.innerWidth;
  links: Link[] = [
    {outlet: '/about', text: 'About'},
    {outlet: '/contact', text: 'Contact'},
  ];
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) this.isHidden = true;
    })
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize($event?): void {
    this.screenWidth = window.innerWidth;
  }

  onBurgerClicked(): void {
    this.isHidden = !this.isHidden;
  }
}
