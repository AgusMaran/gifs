import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGiftsResponse } from '../interface/gifts.interface';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {

  private apiKey: string = 'vUwmEVMDRycjUdmN9m1I4Z4I87R4poo4';

  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'

  private _historial: string[] = [] ;

  public resultados: Gif[] = [];

  get historial() {
    
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    
    /* localStorage.getItem('historial'); */
    /* if (localStorage.getItem('historial') ) { */
      /* this._historial = JSON.parse( localStorage.getItem('historial')! );
    } */
    
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados =  JSON.parse(localStorage.getItem('resultado')!) || [];
  }

  buscarGifts( query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query ) ) {
      this._historial.unshift( query );
      this._historial = this._historial.splice( 0,10);

      localStorage.setItem('historial', JSON.stringify( this._historial ) );



    }

    const params = new HttpParams()
    .set('api_key', this.apiKey )
    .set('limit', '10' )
    .set('q', query );

    console.log(params.toString);


   this.http.get<SearchGiftsResponse>(`${ this.servicioUrl }/search`, { params : params } )
   .subscribe( ( resp )  => {
     this.resultados = resp.data;
     localStorage.setItem('resultados', JSON.stringify( this._historial ) );
   } )
     
   
}

}