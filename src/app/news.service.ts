import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from './models';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

    BASE_URL = "https://6537c293a543859d1bb0c90f.mockapi.io/news/v1"

    constructor(private http: HttpClient) { }

    getNews(): Observable<News[]> {
        return this.http.get<News[]>(`${this.BASE_URL}/news/`);
    }
}
