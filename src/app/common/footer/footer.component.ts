import { Component, OnInit } from '@angular/core';
import { faPalette, faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faPalette: IconDefinition = faPalette;
  faEnvelope: IconDefinition = faEnvelope;
  faLinkedin: IconDefinition = faLinkedin;
  faGithub: IconDefinition = faGithub;
  
  constructor() { }

  ngOnInit(): void {
  }

}
