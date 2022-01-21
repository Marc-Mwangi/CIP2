import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RepoService {
  constructor( private http:HttpClient) {}
  getRepo(){
    return this.http.get<any>('https://api.github.com/users/Marc-Mwangi/repos')
}
}
