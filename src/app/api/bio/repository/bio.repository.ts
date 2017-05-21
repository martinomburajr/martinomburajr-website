import * as firebase from 'firebase/app';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { DB_BIO, DB_DASH } from '../../../globals/const/global.const';

import { AngularFireAuth } from 'angularfire2/auth';
import { BioEntity } from '../entity/bio.entity';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';
import { IRepository } from '../../../globals/interface/repository.interface';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

export interface IBioRepository extends IRepository<BioEntity> {

}
@Injectable()
export class BioRepository implements IBioRepository {

    constructor(private afAuth: AngularFireAuth, private afDB: AngularFireDatabase) { }

    /**
     * Pushes an element to the database
     * 
     * @param {{}} bioEntity 
     * @returns {firebase.database.ThenableReference} 
     * 
     * @memberof IRepository
     */
    create(bioEntity: {}): firebase.database.ThenableReference {
        return this.afDB.list(DB_BIO).push(bioEntity);
    }

    /**
     * Retrieves a database obejct by the key
     * 
     * @param {string} key 
     * @returns {FirebaseObjectObservable<{}>} 
     * 
     * @memberof IRepository
     */
    retrieveByKey(key: string): FirebaseObjectObservable<{}> {
        return this.afDB.object(DB_BIO + DB_DASH + key)
    }

    /**
     * Retrieves a database object based on array of keys
     * 
     * @param {Array<string>} keys 
     * @returns {Observable<{}>} 
     * 
     * @memberof IRepository
     */
    retrieveByKeys(keys: Array<string>): Observable<{}> {
        let bios = new Array<Observable<{}>>();
        keys.map(key => {
            bios.push(this.afDB.object(DB_BIO + DB_DASH + key))
        })
        return Observable.combineLatest(bios)  
    }

    /**
     * Retrieves a database object based on array of keys
     * 
     * @param {Array<string>} keys 
     * @returns {Observable<{}>} 
     * 
     * @memberof IRepository
     */
    retrieveByKeysWithQuery(keys: Array<string>, query: FirebaseListFactoryOpts): Observable<{}> {
        let bios = new Array<Observable<{}>>();
        keys.forEach(key => {
            bios.push(this.afDB.object(DB_BIO + DB_DASH + key, query))
        })
        return Observable.combineLatest(bios);
    };   


    /**
     * Retrieves all elements from the database without a query
     * 
     * @returns {FirebaseListObservable<{}[]>} 
     * 
     * @memberof IRepository
     */ 
    retrieveAllWithQuery(query: FirebaseListFactoryOpts): FirebaseListObservable<{}[]> {
        try{
            return this.afDB.list(DB_BIO, query)
        }catch(e) {
            console.log('Failed');
            return;
        }  
    }
    /**
     * Retrieves all elements from the database with a query
     * 
     * @returns {FirebaseListObservable<{}[]>} 
     * 
     * @memberof IRepository
     */     

    retrieveAll(): FirebaseListObservable<{}[]> {
        return this.afDB.list(DB_BIO);
    }
    /**
     * Updates a value by a given path. The base @exercise path is used The update method uses the firebase update function
     * 
     * @param {string} path 
     * @param {Object} object 
     * @returns {firebase.Promise<void>} 
     * 
     * @memberof IRepository
     */
    update(key: string, object: Object): firebase.Promise<void>{
        return this.afDB.object(DB_BIO + DB_DASH + key).update(object)
    }

    /**
     * Updates a value given a path that is injected directly to the database, and replaces it using the object
     * 
     * @param {string} path 
     * @param {Object} object 
     * @param {string} [key] 
     * @returns {firebase.Promise<void>} 
     * 
     * @memberof IRepository
     */
    updateWithPath(path: string, object: Object, key?: string): firebase.Promise<void> {
        if(key) {
            return this.afDB.object(path + DB_DASH + key).update(object)
        }else{
            return this.afDB.object(path).update(object)
        }  
    }
    /**
     * Similar to update, the function needs to know if the operation is contextual Deletes an element from the database based on an key
     * 
     * @param {string} id 
     * 
     * @memberof IRepository
     */
    delete(isContextual: boolean, path: string): {} {
        return
    }

    /**
     * A purge transforms an entity object into a regular object simplified for the database. It is the exact object
     * that shall be sent to the database 
     * 
     * @param {BioEntity} bioEntity 
     * @returns {{}} 
     * 
     * @memberof IRepository
     */
    purge(bioEntity: BioEntity): {} {
        return
    }

}