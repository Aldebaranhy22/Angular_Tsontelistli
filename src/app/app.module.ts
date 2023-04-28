import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PacienteComponent } from './pacientes/paciente/paciente.component';
import { FormularioComponent } from './pacientes/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PacientesService } from './paciente.service';
import { AppRoutingModule } from './app-routing.module';
import { PacientesComponent } from './pacientes/pacientes.component';


@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    FormularioComponent,
    PacientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoggingService, PacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
