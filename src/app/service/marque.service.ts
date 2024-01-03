import { Injectable } from '@angular/core';
import { Marque } from '../model/marque.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  apiURL: string = 'http://localhost:8082/Marque';
  marques: Marque[] = [];
  constructor(private http : HttpClient) {
  }
  listemarque(): Observable<Marque[]>{
  return this.http.get<Marque[]>(this.apiURL);
  }
  supprimerMarque(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
