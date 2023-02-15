import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './dto/album';

@Injectable({
  providedIn: 'root'
})
export class SpotifyclientService {

  token: string = '';
  username: string = '';

  constructor(private httpClient: HttpClient) { 
    this.token = <string>sessionStorage.getItem('spoty-token');
    this.username = <string>sessionStorage.getItem('username');
  }

  // Common headers merged in a single function to avoid redundancy
  buildBasicHeader(): HttpHeaders {
    let basicHeaders = new HttpHeaders().set("Accept", "application/json")
                               .set("Content-Type", "application/json")
                               .set("Authorization", "Bearer " + sessionStorage.getItem('spoty-token'))
    return basicHeaders;
  }

  registerToken(queryString: string): Observable<any> {
    console.log("raw token" + queryString)
    this.token = queryString.split('&')[0].split("=")[1];
    console.log('token ' + this.token);

    // TODO salvataggio del token
    sessionStorage.setItem('spoty-token', this.token);

    // TODO richiamo dell'API per il recupero delle informazioni utente
    // https://api.spotify.com/v1/me
    let headers = new HttpHeaders().set("Accept", "application/json")
    .set("Content-Type", "application/json")
    .set("Authorization", "Bearer " + sessionStorage.getItem('spoty-token'))
   
    return this.httpClient.get("https://api.spotify.com/v1/me", {'headers': this.buildBasicHeader()} );
  }

  search(searchText: string): Observable<any> {
    // Check if jwt is still valid 
    //console.log("token : { " + sessionStorage.getItem('spoty-token') )

    // Fill blank spaces of searchText with a '+'
    let query = searchText.trim().replace(/\s/g, '+')

    let stringUrl : string = "https://api.spotify.com/v1/search?q=" + query + "&type=track%2Cartist%2Calbum%2Cplaylist&market=US&limit=10" ;
    console.log(stringUrl)
    return this.httpClient.get(stringUrl, {'headers': this.buildBasicHeader()});
  }

  retrieveTracks(album: Album): Observable<any> {

    // TODO implementare richiamo API per il recupero delle tracce presenti nell'album
    // URL presente nella property "album.apiTracks"
    return new Observable();
  }
}
