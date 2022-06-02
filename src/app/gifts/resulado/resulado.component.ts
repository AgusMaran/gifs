import { Component, OnInit } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-resulado',
  templateUrl: './resulado.component.html',
  styles: [
  ]
})
export class ResuladoComponent  {

  get resultados() {
    return this.giftsService.resultados;
  }

  constructor( private giftsService: GiftsService ) { }

  

}
