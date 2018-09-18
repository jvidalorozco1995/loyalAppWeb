import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Constants} from '../utils/Constants';
import {TipoIndustriaModel} from '../models/TipoIndustriaModel';
import {AngularFirestoreCollection} from '@angular/fire/firestore';


@Injectable({
	providedIn: 'root'
})
export class TipoIndustriaService {


	constructor(private firestore: AngularFirestore) {
	}


	public create(tipoindustria: TipoIndustriaModel) {

		tipoindustria.id = this.firestore.createId();
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

		return this.firestore.collection<TipoIndustriaModel>(Constants.tipoIndustria, ref => ref.orderBy('id')).valueChanges();

	}


	public update(documentId: string, data: TipoIndustriaModel) {
		return this.firestore.collection(Constants.tipoIndustria).doc(documentId).set(JSON.parse(JSON.stringify(data)));
	}
}
