import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const TOKEN = 'Bearer BQDtNksu3icPe71MAdmX-FQlWAxjJyM25C_WyxD49vjd3SY3c1HeQ24n5YNxd2L1N58i42e1Y7Clb_JjcvM';
const HEADERS = new HttpHeaders({
  Authorization: TOKEN
});

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    return this.http.get(`${environment.urlApi}/browse/new-releases?limit=20`, { headers: HEADERS })
      .pipe(map((data: any) => data.albums.items));
  }

  getArtists(termino: string) {
    return this.http.get(`${environment.urlApi}/search?q=${termino}&type=artist&limit=15`, { headers: HEADERS })
      .pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: string) {
    return this.http.get(`${environment.urlApi}/artists/${id}`, { headers: HEADERS });
  }

  getTopTracks(id: string) {
    return this.http.get(`${environment.urlApi}/artists/${id}/top-tracks?country=PE`, { headers: HEADERS })
      .pipe(map((data: any) => data.tracks));
  }
}
