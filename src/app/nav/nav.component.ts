import { Component, HostListener, OnInit } from '@angular/core';

export interface Link {
  url: string;
  text: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  isHidden: boolean = true;
  screenWidth: number = screen.width;
  links: Link[] = [
    {url: '#', text: 'About'},
    {url: '#', text: 'Contact'},
  ]

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize($event?): void {
    this.screenWidth = window.innerWidth;
  }

  onNavburgerClicked(): void {
    this.isHidden = !this.isHidden;
  }

}
