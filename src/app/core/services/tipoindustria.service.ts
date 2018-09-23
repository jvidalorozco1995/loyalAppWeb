import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Constants} from '../utils/Constants';
import {TipoIndustriaModel} from '../models/TipoIndustriaModel';
import {AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class TipoIndustriaService {

	tipoIndustria: Observable<TipoIndustriaModel[]>;
	constructor(private firestore: AngularFirestore) {
	}


	public create(tipoindustria: TipoIndustriaModel) {

		/*tipoindustria.id = this.firestore.createId();*/
		return this.firestore.collection(Constants.tipoIndustria)
			.add(JSON.parse(JSON.stringify(tipoindustria))).then(function () {
				console.log('Document successfully written!');
				return 1;
			})
			.catch(function (error) {
				console.error('Error writing document:', error);
				return 0;
			});
	}


	public getById(documentId: string) {
		return this.firestore.collection(Constants.tipoIndustria).doc(documentId).snapshotChanges();
	}


	public get(): Observable<TipoIndustriaModel[]> {
		console.log('ere');
		this.tipoIndustria = this.firestore.collection(Constants.tipoIndustria).snapshotChanges().pipe(map(
			changes => {
				return changes.map(
					a => {
						const data = a.payload.doc.data() as TipoIndustriaModel;
						data.id = a.payload.doc.id;
						return data;
					});

			}));
		return this.tipoIndustria;
		/*return this.firestore.collection<TipoIndustriaModel>(Constants.tipoIndustria, ref => ref.orderBy('id')).valueChanges();*/


	}


	public update(documentId: string, data: TipoIndustriaModel) {
		return this.firestore.collection(Constants.tipoIndustria).doc(documentId).set(JSON.parse(JSON.stringify(data)));
	}


	public deleteById(documentId: string) {
		console.log(documentId)

			const taskDoc = this.firestore.doc(`${Constants.tipoIndustria}/${documentId}`);
		 taskDoc.delete().catch(error => console.log(error)).then(() => console.log(`${documentId} has been deleted.`));


	}
}
