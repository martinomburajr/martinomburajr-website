import * as firebase from 'firebase/app';

import { BioEntity } from '../entity/bio.entity';
import { BioRepository } from '../repository/bio.repository';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectFactoryOpts } from 'angularfire2/interfaces';
import { IService } from '../../../globals/interface/service.interface';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

export interface IBioService extends IService<BioEntity> {
    retrieveAll(): FirebaseListObservable<{}[]>;
    retrieveAllAsEntity(): Observable<BioEntity[]>;
    retrieveAllWithQuery(query: FirebaseObjectFactoryOpts): FirebaseListObservable<{}[]>;
    retrieveAllAsEntityWithQuery(query: FirebaseObjectFactoryOpts): Observable<BioEntity[]>;
}
@Injectable()
export class BioService implements IBioService  {

    constructor(private bR: BioRepository) { }

    retrieveAll(): FirebaseListObservable<{}[]> {
        return this.bR.retrieveAll();
    }
    retrieveAllAsEntity(): Observable<BioEntity[]> {
        return this.bR.retrieveAll().map(object => this.convert(object))
        .combineAll()
    }
    retrieveAllWithQuery(query: FirebaseObjectFactoryOpts): FirebaseListObservable<{}[]> {
        return this.bR.retrieveAllWithQuery(query)
    }
    retrieveAllAsEntityWithQuery(query: FirebaseObjectFactoryOpts): Observable<BioEntity[]> {
        let a = this.bR.retrieveAllWithQuery(query)
            .map(objects => this.convertObjects(objects))
            // .combineAll()

            a.subscribe(x=>console.log(x));

            return a;
    }
    create(bioEntity: {}): firebase.database.ThenableReference {
        return;
    }
    update(key : string, bioEntity: BioEntity): firebase.Promise<any> {
        return;
    }
    delete(key: string): firebase.Promise<any> {
        return;
    }
    search(objects$: Observable<BioEntity[]>, searchField:string, searchItem: string): Observable<{}> {
        return;
    }
    convert(object: {}): BioEntity {
        let bioEntity = new BioEntity();
        if(object['$key']) {bioEntity.Id = object['$key'] }
        if(object['createdDate']) {bioEntity.CreatedDate = object['createdDate'] }
        if(object['title']) {bioEntity.Title = object['title'] }
        if(object['body']) {bioEntity.Body = object['body'] }
        if(object['updatedDate']) {bioEntity.UpdatedDate = object['updatedDate'] }
        if(object['version']) {bioEntity.Version = object['version'] }
        if(object['views']) {bioEntity.Views = object['views'] }

        return bioEntity;
    }

    convertObjects(objects: {}[]): BioEntity[] {
       return new Array<BioEntity>().concat(objects.map(object => this.convert(object)));
    }

    
}