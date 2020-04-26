export class Alumno {
  public id: number;
  public nombre: string;
  public email: string;
  public avatar: string;
  public promedio_general: number;
  public carrera: string;
  public condicion: string;
  public url: string;
  public materias_en_curso: string[];

  constructor(
    id: number,
    nombre: string,
    email: string,
    avatar: string,
    promedio_general: number,
    carrera: string,
    condicion: string,
    url: string,
    materias_en_curso: string[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.avatar = avatar;
    this.promedio_general = promedio_general;
    this.carrera = carrera;
    this.condicion = condicion;
    this.url = url;
    this.materias_en_curso = materias_en_curso;
  }
}

export class AlumnoLite {
  constructor(
    public id: number,
    public nombre: string,
    public email: string,
    public promedio_general: number
  ) {}
}
