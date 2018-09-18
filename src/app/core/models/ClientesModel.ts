export class ClientesModel {
  public id: String;
  public nit: String;
  public nombres: String;
  public telefono: String;
  public contacto: String;
  public correo: String;
  public tipoIndustria: String;
  public estado: String;
  public logo: String;
  public descripcionNegocio: String;

  constructor(id: String, nit: String, nombres: String, telefono: String, contacto: String, correo: String, tipoIndustria: String, estado: String, logo: String, descripcionNegocio: String) {
    this.id = id;
    this.nit = nit;
    this.nombres = nombres;
    this.telefono = telefono;
    this.contacto = contacto;
    this.correo = correo;
    this.tipoIndustria = tipoIndustria;
    this.estado = estado;
    this.logo = logo;
    this.descripcionNegocio = descripcionNegocio;
  }
}
