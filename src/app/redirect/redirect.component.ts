import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyclientService } from '../spotifyclient.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private router: Router, private service: SpotifyclientService) { }

  ngOnInit(): void {

    this.service.registerToken(location.hash.substring(1))
    .subscribe((response) => { 
      const user: Object = (response as Object)
      console.log("Logged user: " + user)
    });
    
    this.router.navigate(['search']);

  }

}
