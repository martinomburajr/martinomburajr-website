import { Observable } from 'rxjs/Rx';
import { GeolocationEntity } from '../../../entity/geolocation/geolocation.entity';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

// export interface IGeolocationRepository {
//     create
//     retrieve
//     update
//     delete
//     purge
// }

@Injectable()
export class GeolocationRepository {
    public constructor(private afAuth: AngularFireAuth, private afDB: AngularFireDatabase) {

    }

    public create(geolocation: GeolocationEntity):{} {
        let purge = this.purge(geolocation)
        try {
             return this.afDB.list('/geolocation').push(purge)
        }catch(error) {
            return null;
        }
    }
    public createObject(geolocation: {}):{} {
        try {
            console.log(geolocation)
             let a =  this.afDB.list('geolocation').push(geolocation);
             console.log(a.key);
        }catch(err) {
            return null;
        }
    }
    public retrieveAll(): FirebaseListObservable<{}[]> {
        return this.afDB.list('/geolocation')
    }

    public retrieve(key: string): FirebaseObjectObservable<{}> {
        return this.afDB.object('/geolocation' + '/' + key)
    }

    public update() {}
    public delete() {}
    
    public purge(geolocation: GeolocationEntity): {accuracy: number, altitude: number,altitudeAccuracy: number,heading: number,latitude: number,longitude: number,timestamp: number} {
        return { accuracy: geolocation.Coordinates.Accuracy, 
                altitude: geolocation.Coordinates.Altitude,
                altitudeAccuracy: geolocation.Coordinates.AltitudeAccuracy,
                heading: geolocation.Coordinates.Heading,
                latitude: geolocation.Coordinates.Latitude,
                longitude: geolocation.Coordinates.Longitude,
                timestamp: geolocation.Timestamp
        }
    }
}