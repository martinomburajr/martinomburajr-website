import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { GeolocationService } from './api/service/geolocation/geolocation.service';
import { OnInit } from '@angular/core/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private glS: GeolocationService, private afDB: AngularFireDatabase) {
    this.glS.getLocation({}).map(location => this.glS.convertToObject(location))
            .map(geolocation => {console.log(geolocation); this.glS.upload(geolocation); }).subscribe(x=>console.log(x))
    this.glS.retrieveAll().subscribe(x=>console.log(x));
  }

  ngOnInit() {

  }
}
