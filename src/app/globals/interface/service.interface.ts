import * as firebase from 'firebase/app';

import {FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

import {Observable} from 'rxjs/Rx';
import { updateNotifierCheck } from 'tslint/lib/updateNotifier';

export interface IService<T> {

    create(t: {}): firebase.database.ThenableReference;
    update(key : string, t: T): firebase.Promise<any>
    delete(key: string): firebase.Promise<any>
    search(objects$: Observable<T[]>, searchField:string, searchItem: string): Observable<{}>
    convert(object: {}): T
}