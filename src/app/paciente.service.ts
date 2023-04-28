import { Paciente } from "./paciente.model";
import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from "./LoggingService.service";
import { Sexo } from "./sexo.model";
import { Terapeuta } from "./terapeuta.model";
import { HttpClient } from '@angular/common/http';
import { environment } from "./environment";


@Injectable()
export class PacientesService {
    pacientes: Paciente[] = [new Paciente('César Ricardo', 'Lazcano Valdez', 'C ESTRONCIO 48 COL. VILLA MAGNA'
    , '55 5677 6788', new Date(), new Date(), 'ositocariñosito', 'ricardin.lazcano@correo.mx', new Sexo(1, 'Masculino'), new Terapeuta('Carlos'))];


     saludar = new EventEmitter<number>();
     
constructor(private loggingService: LoggingService,
            private http: HttpClient){}

getPacientes():Paciente[]{
    this.http.get<Paciente[]>(`${environment.apiUrl}/api/pacientes`).subscribe( pacientes => {
        this.pacientes = pacientes;
    });
    return this.pacientes;

}
    pacienteAgregado(paciente: Paciente) {
        this.loggingService.enviaMensajeaConsola('Paciente agregado')
        this.pacientes.push(paciente);
    }
}