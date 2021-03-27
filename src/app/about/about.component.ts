import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  backgroundUrl: string = '../../../assets/images/moving-truck.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
