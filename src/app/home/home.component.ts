import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  backgroundUrl: string = '../../../assets/images/wasatch-front.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
