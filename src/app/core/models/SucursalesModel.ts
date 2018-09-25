export class SucursalesModel {

  public id: String;
  public idCliente: String;
  public ciudad: String;
  public pais: String;
  public departamento: String;
  public contacto: String;
  public celular: String;
  public telefono: String;
  public direccion: String;
  public correo: String;
  public token: String;

  clear() {
    this.id = '';
    this.idCliente = '';
    this.ciudad = '';
    this.pais = '';
    this.departamento = '';
    this.contacto = '';
    this.celular = '';
    this.telefono = '';
    this.direccion = '';
    this.correo = '';
    this.token = '';
  }

  // constructor(id: String, idCliente: String, ciudad: String, pais: String, departamento: String, contacto: String, telefono: String, direccion: String, correo: String, token: String) {
  //   this.id = id;
  //   this.idCliente = idCliente;
  //   this.ciudad = ciudad;
  //   this.pais = pais;
  //   this.departamento = departamento;
  //   this.contacto = contacto;
  //   this.telefono = telefono;
  //   this.direccion = direccion;
  //   this.correo = correo;
  //   this.token = token;
  // }
}
