import {BaseModel} from '../../content/pages/components/apps/e-commerce/_core/models/_base.model';

export class TipoIndustriaModel extends BaseModel {
   public id: String;
   public nombre: String;

	clear() {
		this.id = '';
	  this.nombre = '';
	}
}
