export class ClientesModel {

  public id: String;
  public idSucursal: String;
  public cantidad: Number;
  public estadoPromocion: String;


  constructor(id: String, idSucursal: String, cantidad: Number, estadoPromocion: String) {
    this.id = id;
    this.idSucursal = idSucursal;
    this.cantidad = cantidad;
    this.estadoPromocion = estadoPromocion;
  }
}
