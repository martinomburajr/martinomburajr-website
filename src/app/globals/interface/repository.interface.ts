import * as firebase from 'firebase/app';

import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';
import { Observable } from 'rxjs/Rx';

export interface IRepository<T> {
    /**
     * Pushes an element to the database
     * 
     * @param {{}} t 
     * @returns {firebase.database.ThenableReference} 
     * 
     * @memberof IRepository
     */
    create(t: {}): firebase.database.ThenableReference;

    /**
     * Retrieves a database obejct by the key
     * 
     * @param {string} key 
     * @returns {FirebaseObjectObservable<{}>} 
     * 
     * @memberof IRepository
     */
    retrieveByKey(key: string): FirebaseObjectObservable<{}>;

    /**
     * Retrieves a database object based on array of keys
     * 
     * @param {Array<string>} keys 
     * @returns {Observable<{}>} 
     * 
     * @memberof IRepository
     */
    retrieveByKeys(keys: Array<string>): Observable<{}>;

    /**
     * Retrieves a database object based on array of keys
     * 
     * @param {Array<string>} keys 
     * @returns {Observable<{}>} 
     * 
     * @memberof IRepository
     */
    retrieveByKeysWithQuery(keys: Array<string>, query: FirebaseListFactoryOpts): Observable<{}>;   


    /**
     * Retrieves all elements from the database without a query
     * 
     * @returns {FirebaseListObservable<{}[]>} 
     * 
     * @memberof IRepository
     */ 
    retrieveAllWithQuery(query: FirebaseListFactoryOpts): FirebaseListObservable<{}[]>;
    /**
     * Retrieves all elements from the database with a query
     * 
     * @returns {FirebaseListObservable<{}[]>} 
     * 
     * @memberof IRepository
     */     

    retrieveAll(): FirebaseListObservable<{}[]>; 
    /**
     * Updates a value by a given path. The base @exercise path is used The update method uses the firebase update function
     * 
     * @param {string} path 
     * @param {Object} object 
     * @returns {firebase.Promise<void>} 
     * 
     * @memberof IRepository
     */
    update(key: string, object: Object): firebase.Promise<void>

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
    updateWithPath(path: string, object: Object, key?: string): firebase.Promise<void>
    /**
     * Similar to update, the function needs to know if the operation is contextual Deletes an element from the database based on an key
     * 
     * @param {string} id 
     * 
     * @memberof IRepository
     */
    delete(isContextual: boolean, path: string)

    /**
     * A purge transforms an entity object into a regular object simplified for the database. It is the exact object
     * that shall be sent to the database 
     * 
     * @param {T} t 
     * @returns {{}} 
     * 
     * @memberof IRepository
     */
    purge(t: T): {} 
}