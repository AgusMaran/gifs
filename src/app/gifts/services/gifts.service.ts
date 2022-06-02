import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {

  private apiKey: string = 'vUwmEVMDRycjUdmN9m1I4Z4I87R4poo4';

  private _historial: string[] = [] ;

  public resultados: any[] = [];

  get historial() {
    
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  buscarGifts( query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query ) ) {
      this._historial.unshift( query );
      this._historial = this._historial.splice( 0,10);
    }

   this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=vUwmEVMDRycjUdmN9m1I4Z4I87R4poo4&q=${ query }`)
   .subscribe( ( resp: any )  => {
     console.log(resp.data);
     this.resultados = resp.data;
   } )
     
   
}

}