import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Permite Databinding, modificacion en vista a back
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //Componentes y directivas
    AppComponent
  ],
  imports: [ //Modulos del framework
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [], //Cargar servicios, middlewares, confirmadores
  bootstrap: [AppComponent] //Punto incial de la app
})
export class AppModule { }
