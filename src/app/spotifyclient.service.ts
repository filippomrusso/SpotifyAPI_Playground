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

    let headers = this.buildBasicHeader();

    return this.httpClient.get("https://api.spotify.com/v1/me", {'headers' : headers} );
  }

  search(searchText: string): Observable<any> {

    // TODO implementare richiamo API per la ricerca
    // https://api.spotify.com/v1/search?query=the+script&type=album&offset=0&limit=20
    // const query : String = searchText.trim().replace(/\s/g, '+')
    const headers = this.buildBasicHeader();

                                     
    let stringUrl : string = "https://api.spotify.com/v1/search?q=" ;
    let temp : string = stringUrl + searchText + "&type=album%2Ctrack%2Cplaylist%2Cartist&market=US&limit=10";
    
    let url = new URL(temp)

    console.log(url)


    //return this.httpClient.get();
    return new Observable();  
  }

  retrieveTracks(album: Album): Observable<any> {

    // TODO implementare richiamo API per il recupero delle tracce presenti nell'album
    // URL presente nella property "album.apiTracks"
    return new Observable();
  }
}
