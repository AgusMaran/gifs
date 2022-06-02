import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsPageComponent } from './gifts-page/gifts-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResuladoComponent } from './resulado/resulado.component';



@NgModule({
  declarations: [
    GiftsPageComponent,
    BusquedaComponent,
    ResuladoComponent
  ],
  exports: [
    GiftsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GiftsModule { }
