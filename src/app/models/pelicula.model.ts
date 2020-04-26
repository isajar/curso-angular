export class Pelicula {
  public creado: Date;
  constructor(
    public titulo: string,
    public categoria: string,
    public link: string
  ) {
    this.creado = new Date();
  }
}
