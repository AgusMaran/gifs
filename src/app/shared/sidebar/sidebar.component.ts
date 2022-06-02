import { Component, } from '@angular/core';
import { GiftsService } from 'src/app/gifts/services/gifts.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent  {

  get historial() {
    return this.gifsService.historial;
  }

  constructor( private gifsService: GiftsService ) { }

  
}


