import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSecondaryClick() {
    this.router.navigate(['bio/education/secondary']);
  }

  onTertiaryClick() {
    this.router.navigate(['bio/education/tertiary']);
  }
}
