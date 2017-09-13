import { Component, OnInit } from '@angular/core';
import {VerticalNavIconService} from "clarity-angular/src/layout/vertical-nav/providers/vertical-nav-icon.service";

@Component({
  selector: 'app-secondary-education',
  templateUrl: './secondary-education.component.html',
  styleUrls: ['./secondary-education.component.css']
})
export class SecondaryEducationComponent implements OnInit {

  constructor(private vc: VerticalNavIconService) { }

  ngOnInit() {
  }

}
