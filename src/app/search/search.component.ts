import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Album } from '../dto/album';
import { Artist } from '../dto/artist';
import { Playlist } from '../dto/playlist';
import { Track } from '../dto/track';
import { SpotifyclientService } from '../spotifyclient.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  resultTrack: Array<Track> = new Array();
  resultAlbum: Array<Album> = new Array();
  resultPlaylist: Array<Playlist> = new Array();
  resultArtist: Array<Artist> = new Array();

  trackClass: string = 'nav-link active';
  albumClass: string = 'nav-link';
  playlistClass: string = 'nav-link';
  artistClass: string = 'nav-link';

  constructor(private httpClient: HttpClient, private service: SpotifyclientService) { }

  get username() {
    return this.service.username;
  }

  ngOnInit(): void {

  }

  changeTab(index: string) {

    this.trackClass = 'nav-link ';
    this.albumClass = 'nav-link ';
    this.playlistClass = 'nav-link ';
    this.artistClass = 'nav-link ';
    switch(index) {
      case 'track': this.trackClass += 'active'; break;
      case 'album': this.albumClass += 'active'; break;
      case 'playlist': this.playlistClass += 'active'; break;
      case 'artist': this.artistClass += 'active'; break;
    }
  }

  play(track: Track) {
  }

  search(searchText: string) {

// ---------- RESET INTERNAL LISTS ----------    
    this.resultTrack.splice(0, this.resultTrack.length);
    this.resultAlbum.splice(0, this.resultAlbum.length);
    this.resultArtist.splice(0, this.resultArtist.length);
    this.resultPlaylist.splice(0, this.resultPlaylist.length);

// ---------- CALL SPOTIFY REST API ----------    
    this.service.search(searchText).subscribe((data: any) => {

      let tracks = new Array();
      console.log(tracks);
      // MAPPING PROPERTY TRACK

      let albums = new Array();
      console.log(albums);
      // MAPPING PROPERTY ALBUM

      let artists = new Array();
      console.log(artists);
      // MAPPING PROPERTY ARTISTS

      let playlists = new Array();
      console.log(playlists);
      // MAPPING PROPERTY PLAYLIST

    });
  }

  fillTracks(album: Album) {

  }
}
