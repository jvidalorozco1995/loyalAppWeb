import {BaseModel} from '../../content/pages/components/apps/e-commerce/_core/models/_base.model';

export class TipoIndustriaModel  {

   public nombre: String;
	public id: String;


	clear() {this.id = '';
	  this.nombre = '';
	}
}
