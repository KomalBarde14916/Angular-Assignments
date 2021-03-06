import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Laptop } from '../models/laptop.model';

const baseUrl = 'http://localhost:3000/api/laptops';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
 
  getAll(): Observable<Laptop[]> {
    return this.http.get<Laptop[]>(baseUrl);
  }
  
  get(id: any): Observable<Laptop> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Laptop[]> {
    return this.http.get<Laptop[]>(`${baseUrl}?name=${name}`);
  }
  
 
}
