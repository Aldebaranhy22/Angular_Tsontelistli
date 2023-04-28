
export class Terapeuta{
    
    idTerapeuta: number;
    nombre: string = '';
    apellidos: string = '';
    especialidad: string = '';
    telefono: string = '';
    correo: string = ''; 
    password: string = '';
    fechaIngreso: Date = new Date();
  /*  direccionT: string = '';
    fechaNacimientoT: Date = new Date();
    fechaInicioT: Date = new Date();
    cedula: string = '';
    */

    constructor(nombre: string){
      this.nombre = nombre;
    }
}