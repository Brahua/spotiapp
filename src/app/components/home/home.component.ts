import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading = true;
  errorMessage: string;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.spotifyService.getNewReleases()
        .subscribe(data => {
          this.newReleases = data;
          this.loading = false;
        }, error => {
          this.loading = false;
          this.errorMessage = error.error.error.message;
        });
    }, 2000);

  }

}
