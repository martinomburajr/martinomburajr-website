import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { GeolocationService } from './api/service/geolocation/geolocation.service';
import { OnInit } from '@angular/core/core';

@Component({
    selector: 'body',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
        // console.log("AppComponent")
  }

}
