import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Paciente } from '../../paciente.model';
import { PacientesService } from 'src/app/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit{

  @Input() pacientes: Paciente[];
 // @Input() indice: number;

  constructor(private pacientesService : PacientesService) { }

  ngOnInit(): void {
    //this.paciente = new Paciente("Vianey", "Flores", "San juan de la chingada", "55 44 66 77", "frecuentemente");
    this.pacientes = this.pacientesService.getPacientes();
   // this.indice = 0;
  }

  emitirSaludo(){
     
  }

}
