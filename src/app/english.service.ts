import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';

import { Phrase } from './phrases/phrase';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EnglishService {
  private apiUrl = 'http://127.0.0.1:5000/api/ingles';  // URL to web api

  constructor(
    private http: HttpClient) { }
    getPhrases () {
      return this.http.get(this.apiUrl)
      .map((res:Response) => res);
   }
   /*
   return [
     {
         "_id" : "5a837e45dd706617c8d12769",
         "us" : "Raze to the ground",
         "es" : "Arrasar al suelo",
         "meaning" : "Para destruir y barrer por completo."
     },
     {
         "_id" : "5a837e45dd706617c8d12770",
         "us" : "test",
         "es" : "test",
         "meaning" : "Para destruir y barrer por completo."
     }];
     */
 

  }



}
