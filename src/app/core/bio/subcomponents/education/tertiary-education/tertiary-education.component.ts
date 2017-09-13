import { VerticalNavIconService } from 'clarity-angular/src/layout/vertical-nav/providers/vertical-nav-icon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tertiary-education',
  templateUrl: './tertiary-education.component.html',
  styleUrls: ['./tertiary-education.component.css']
})
export class TertiaryEducationComponent implements OnInit {

  constructor(private vc: VerticalNavIconService) { }

  ngOnInit() {
  }

}
