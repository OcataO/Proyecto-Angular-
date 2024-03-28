import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RutComponent } from './contacto/rut/rut.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    ContactoComponent,
    DetalleProductoComponent,
    RutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, //Se usa para formularios tipo plantilla
    ReactiveFormsModule, //Se usa para formularios reactivos
    HttpClientModule //Para hacer peticiones http - de la mano de servicios/api
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
