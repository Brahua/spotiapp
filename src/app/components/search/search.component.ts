import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading = false;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  search(termino: string) {
    this.loading = true;
    this.spotifyService.getArtists(termino)
      .subscribe(data => {
        this.artists = data;
        this.loading = false;
      });
  }

}
