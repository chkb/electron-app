import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  getDocument(collection: string, id: string): Observable<any> {
    return this.afs
      .collection(collection)
      .doc(id)
      .valueChanges();
  }

  getCollection(collection: string): Observable<any> {
    return this.afs.collection(collection)
      .snapshotChanges();
  }

  createDocument(collection: string, object: any): void {
    this.afs.collection(collection)
      .add(JSON.parse(JSON.stringify(object)))
      .catch(error => this.handleError(error))
      .then(res => {
        console.log(res);
      });
  }

  createSubDocument(collection: string, id: string, subCollection: string, object: any): void {
    this.afs.collection(collection)
      .doc(id)
      .ref
      .collection(subCollection)
      .add(JSON.parse(JSON.stringify(object)))
      .catch(error => this.handleError(error))
      .then(res => {
        console.log(res);
      });
  }

  upsertDocument(collection: string, id: string, object: any): void {
    this.afs.collection(collection)
      .doc(id)
      .set(JSON.parse(JSON.stringify(object)))
      .catch(error => this.handleError(error))
      .then(res => {
        console.log(res);
      });
  }

  deleteDocument(collection: string, id: string): void {
    this.afs.collection(collection)
      .doc(id)
      .delete()
      .catch(error => this.handleError(error))
      .then(res => {
        console.log(res);
      });
  }

  updateDocument(collection: string, id: string, object: any): void {
    this.afs
      .collection(collection)
      .doc(id)
      .update(JSON.parse(JSON.stringify(object)))
      .catch(error => this.handleError(error))
      .then(res => {
        console.log(res);
      });
  }

  private handleError(error) {
    console.log(error);
  }
}
