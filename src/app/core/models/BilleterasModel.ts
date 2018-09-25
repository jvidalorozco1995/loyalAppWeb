export class BilleterasModel  {

	public id: String;
	public idPromocion: String;
	public idUsuario: String;

	clear() {
		this.id = '';
	  this.idPromocion = '';
	  this.idUsuario = '';
	}
}
