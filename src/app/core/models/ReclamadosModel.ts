export class ReclamadosModel {
  public id: String;
  public idSello: String;
  public fechaReclamo: String;


  constructor(id: String, idSello: String, fechaReclamo: String) {
    this.id = id;
    this.idSello = idSello;
    this.fechaReclamo = fechaReclamo;
  }
}
