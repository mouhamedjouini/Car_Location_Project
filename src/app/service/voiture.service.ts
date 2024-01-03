import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { voiture } from '../model/voiture.model';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  apiURL: string = 'http://localhost:8082/voiture';
  voitures: voiture[] = [];
  constructor(private http: HttpClient) {
  }
  listevoiture(): Observable<voiture[]> {
    return this.http.get<voiture[]>(this.apiURL);
  }
  ajouterVoiture(voit: voiture): Observable<voiture> {
    return this.http.post<voiture>(this.apiURL, voit, httpOptions);
  }
  supprimerVoiture(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  consulterVoiture(id: number): Observable<voiture> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<voiture>(url);
  }
  updateVoiture(voit :voiture) : Observable<voiture>
  {
  return this.http.put<voiture>(this.apiURL, voit, httpOptions);
  }


}
