import { AngularFireDatabase } from 'angularfire2/database';
import { OnInit } from '@angular/core/core';
import { GeolocationService } from './api/service/geolocation/geolocation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private glS: GeolocationService, private afDB: AngularFireDatabase) {

  }

  ngOnInit() {
    let a = this.glS.getLocation({}).map(location => this.glS.convertToObject(location))
            .map(geolocation => {console.log(geolocation); this.glS.upload(geolocation); }).subscribe(x=>console.log(x))
    this.glS.retrieveAll().subscribe(x=>console.log(x));
}
}
