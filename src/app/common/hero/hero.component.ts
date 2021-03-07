import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
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
      height: ${this.isHome ? '50vh' : '80vh'};
    `;
  }

}
