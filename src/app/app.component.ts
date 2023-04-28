import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente.model';
import { LoggingService } from './LoggingService.service';
import { PacientesService } from './paciente.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
agregarPaciente() {
throw new Error('Method not implemented.');
}
  titulo = 'tsontelistli-sistem';
  pacientes: Paciente[] = [];

  constructor(private loggingService: LoggingService, 
              private pacientesService: PacientesService){
                this.pacientesService.saludar.subscribe(
                  (indice: number) => alert("el numero es: " + indice)
                );
              }
  
  ngOnInit(): void {
    this.pacientes = this.pacientesService.pacientes;
  }

  }
