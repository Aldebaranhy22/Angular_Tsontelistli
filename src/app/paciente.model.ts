import { Sexo } from "./sexo.model";
import { Terapeuta } from "./terapeuta.model";

export class Paciente{
 
     nombre: string = '';
     apellidos: string = '';
     telefono: string = '';
     direccion: string = '';
     fechaNacimiento: Date = new Date();
     fechaInicio: Date = new Date();
     password: string = '';
     correo: string = '';
     sexo: Sexo;
     terapeuta: Terapeuta;

 constructor(nombre: string, 
    apellidos: string, 
    direccion: string,
     telefono: string, 
     fechaNacimiento: Date,
      fechaInicio: Date, 
      password: string,
      correo: string,
      sexo: Sexo,
      terapeuta: Terapeuta
      ){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.direccion = direccion;
        this.fechaNacimiento = fechaNacimiento;
        this.fechaInicio = fechaInicio;
        this.password = password;
        this.correo = correo;
        this.sexo = sexo;
        this.terapeuta = terapeuta;
 }
 /*     
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.sexo = sexo;

    
    */
  
  
}