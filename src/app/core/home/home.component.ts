import { Component, OnInit } from '@angular/core';

import {AngularFireDatabase} from 'angularfire2/database';
import {GeolocationService} from '../../api/service/geolocation/geolocation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private glS: GeolocationService, private afDB: AngularFireDatabase) {

  }

  ngOnInit() {
    this.load();
  }

  load() {
        this.glS.getLocation({}).map(location => this.glS.convertToObject(location))
            .map(geolocation => {console.log(geolocation); this.glS.upload(geolocation); }).subscribe(x=>console.log(x))
    this.glS.retrieveAll().subscribe(x=>console.log(x));
  }

}