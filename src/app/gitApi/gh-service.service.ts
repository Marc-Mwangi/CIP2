import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GhServiceService {


  constructor( private http:HttpClient) {}
  getData(){
    return this.http.get<any>('https://api.github.com/users/Marc-Mwangi')
   }
}
