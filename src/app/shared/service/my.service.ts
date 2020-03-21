import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from './interface';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getProfile() {
    return this.http.get<Profile>(`${environment.baseUrl}/profile`);
  }
}
