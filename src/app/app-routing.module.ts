import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pacientes/pacientes.component';
import { FormularioComponent } from './pacientes/formulario/formulario.component';

const routes: Routes = [
  {path: '', component: PacientesComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'pacientes/agregar', component: FormularioComponent},
  {path: 'pacientes/:id', component: FormularioComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(
routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
