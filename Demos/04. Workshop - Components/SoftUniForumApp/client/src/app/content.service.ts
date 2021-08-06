import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme } from './shared/interfaces';
import { environment } from '../environments/environment';

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadThemes() {
    return this.http.get<[ITheme]>(`${environment.API_URL}/themes`);
  }

  loadPosts(limit?: number) {
    const query = limit ? `?limit=${limit}` : '';
    return this.http.get<[IPost]>(`${environment.API_URL}/posts${query}`);
  }
}
