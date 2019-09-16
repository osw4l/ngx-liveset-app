import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public RESOURCES = `${environment.domain}/api`;
  public SONGS_URL = `${this.RESOURCES}/songs`;
  public VIDEOS_URL = `${this.RESOURCES}/videos`;

  constructor(private  http: HttpClient) {
  }

  getSongs(): Observable<any> {
    return this.http.get(this.SONGS_URL);
  }

  getVideos(): Observable<any> {
    return this.http.get(this.VIDEOS_URL);
  }
}
