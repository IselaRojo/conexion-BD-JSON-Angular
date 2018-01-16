import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyComponenteComponent } from './my-componente/my-componente.component';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component';
import { VerComponent } from './ver/ver.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponenteComponent,
    ListadoComponent,
    FormularioComponent,
    VerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'listado', component: ListadoComponent},
      {path: 'formulario', component: FormularioComponent},
      {path: 'detalles/:id/:tipo', component: VerComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
