import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  private baseUrl = 'https://api.jikan.moe/v4/manga';

  constructor(private http: HttpClient) {}

  getMangas(search: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?q=${search}&limit=10`);
  }

  getMangaById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
