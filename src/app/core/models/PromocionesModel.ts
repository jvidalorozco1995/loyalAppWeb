export class PromocionesModel  {

  public id: String;
	public IdSucursal: String;
	public IdQr: String;
	public Nombre: String;
	public FechaInicio: String;
	public FechaFin: String;
	public NumeroCompras: String;
	public Descripcion: String;

	clear() {
		this.id = '';
		this.IdSucursal = '';
	  this.IdQr = '';
	  this.Nombre = '';
	  this.FechaInicio = '';
	  this.FechaFin = '';
	  this.NumeroCompras = '';
	  this.Descripcion = '';
	}
}
