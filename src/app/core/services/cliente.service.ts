import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Constants} from '../utils/Constants';
import {ClientesModel} from '../models/ClientesModel';
import {AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class ClienteService {

	cliente: Observable<ClientesModel[]>;
	constructor(private firestore: AngularFirestore) {
	}


	public create(tipoindustria: ClientesModel) {

		/*tipoindustria.id = this.firestore.createId();*/
		return this.firestore.collection(Constants.clientes)
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
		return this.firestore.collection(Constants.clientes).doc(documentId).snapshotChanges();
	}


	public get(): Observable<ClientesModel[]> {
		console.log('ere');
		this.cliente = this.firestore.collection(Constants.clientes).snapshotChanges().pipe(map(
			changes => {
				return changes.map(
					a => {
						const data = a.payload.doc.data() as ClientesModel;
						data.id = a.payload.doc.id;
						return data;
					});

			}));
		return this.cliente;
		/*return this.firestore.collection<ClientesModel>(Constants.clientes, ref => ref.orderBy('id')).valueChanges();*/


	}


	public update(documentId: string, data: ClientesModel) {
		return this.firestore.collection(Constants.clientes).doc(documentId).set(JSON.parse(JSON.stringify(data)));
	}


	public deleteById(documentId: string) {
		console.log(documentId)

			const taskDoc = this.firestore.doc(`${Constants.clientes}/${documentId}`);
		 taskDoc.delete().catch(error => console.log(error)).then(() => console.log(`${documentId} has been deleted.`));


	}
}
