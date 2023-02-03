import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
      
  }

  login() {

    let spotifyBaseUrl: string = 'https://accounts.spotify.com/authorize';
    let clientId: string = '324274c5f45a42cfb0d8c7c46096b889';
    let redirectUrl: string = 'http://localhost:4200/redirect';

    window.location.href = spotifyBaseUrl + '?client_id=' + clientId + '&redirect_uri=' + redirectUrl + '&response_type=token&show_dialog=true';
    
  }

}
