import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Paciente } from '../paciente.model';
import { PacientesService } from '../paciente.service';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private loggingService:LoggingService,
              private pacientesService:PacientesService){
                this.pacientesService.saludar.subscribe(
                  (indice: number) => alert("El indice es: "+ indice)
                );
              }
  ngOnInit(): void {
    this.pacientes = this.pacientesService.pacientes;
  }

}
