import { Component, Output } from '@angular/core';
import { Paciente } from '../../paciente.model';
import { LoggingService } from '../../LoggingService.service';
import { PacientesService } from '../../paciente.service';
import { Sexo } from 'src/app/sexo.model';
import { Terapeuta } from 'src/app/terapeuta.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],

})
export class FormularioComponent {

  //@Output() pacienteCreado = new EventEmitter<Paciente>();
  nombreInput: string;
  apellidosInput: string;
  dirInput: string;
  telInput: string;
  fechaNInput: Date;
  fechaIniInput: Date;
  correoInput: string;
  sexoInput: Sexo;
  terapeutaInput: Terapeuta;

  constructor(private loggingService: LoggingService,
    private pacientesService: PacientesService) {
    this.pacientesService.saludar.subscribe(
      (indice: number) => alert("El indice es: " + indice)
    );
  }


  agregarPaciente() {
    let paciente1 = new Paciente(
      this.nombreInput, this.apellidosInput,
      this.dirInput, this.telInput, this.fechaNInput, 
      this.fechaIniInput, "pas", this.correoInput, this.sexoInput, this.terapeutaInput);
    /*let paciente2 = new Paciente[(this.nombreInput, this.apellidosInput, this.dirInput, this.telInput, this.fechaNInput,
        this.fechaIniInput, this.passwordInput, this.correoInput)];*/
    this.pacientesService.pacienteAgregado(paciente1);
    this.loggingService.enviaMensajeaConsola("jjjj")
  }


}
