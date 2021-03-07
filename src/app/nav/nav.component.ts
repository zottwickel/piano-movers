import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

export interface Link {
  outlet: string;
  text: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isHidden: boolean = true;
  screenWidth: number = screen.width;
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
