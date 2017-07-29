import * as firebase from 'firebase/app';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { FirebaseListFactoryOpts, PathReference } from 'angularfire2/interfaces';

import { AngularFireAuth } from 'angularfire2/auth';
import { BioEntity } from '../../api/bio/entity/bio.entity';
import { BioService } from '../../api/bio/service/bio.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  private bio$: Observable<BioEntity>
  private title: string;
  private downloadURL: string;
  constructor(private bS: BioService, private afDb: AngularFireDatabase, private afAuth: AngularFireAuth) { 
    this.bio$ = new Observable<BioEntity>(x=>x);
    this.title = 'Bio'
  }

  ngOnInit() {
    let b = this.retrieveBio()
    this.bio$ = this.loadBio(b);
  }

  retrieveBio(): Observable<BioEntity[]> {
    let query = <FirebaseListFactoryOpts>{}
    query.query = {};
    query.query.orderByKey = true;
    query.query.limitToFirst = 1;
    console.log(query);
    return this.bS.retrieveAllAsEntityWithQuery(query);
  }

  loadBio(bio: Observable<BioEntity[]>, index = 0): Observable<BioEntity> {
    return bio.map(x => x[0]);
  }

  onCVClick() {
    //     var storage = firebase.storage();
    //     let pathReference = storage.ref('CV/Martin Ombura CV (May 2017).pdf');
    //     var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/martinomburajr-a1bcd.appspot.com/o/CV%2FMartin%20Ombura%20CV%20(May%202017).pdf?alt=media&token=18141941-48f3-4e05-bcf9-ec56bf84d73c');
    //     // Create a reference to the file we want to download
    // var starsRef = pathReference.getDownloadURL().then(function(url) {
    //   // Insert url into an <img> tag to "download"
    //   this.downloadURL = url;
    // }).catch(function(error) {

    //   // A full list of error codes is available at
    //   // https://firebase.google.com/docs/storage/web/handle-errors
    //   switch (error.name) {
    //     case 'storage/object_not_found':
    //       console.log('File doesnt exist')
    //       break;

    //     case 'storage/unauthorized':
    //       console.log('User doesnt have permission to access the object')
    //       break;

    //     case 'storage/canceled':
    //       console.log('User canceled the upload');
    //       break;

    //     case 'storage/unknown':
    //       console.log('Unknown error occurred, inspect the server response');
    //       break;
    //   }
    //     });    
  }
}