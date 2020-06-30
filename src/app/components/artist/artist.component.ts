import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: any;
  topTracks: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService) {
    this.activatedRoute.params
      .subscribe(params => {
        this.getArtist(params.id);
        this.getTopTracks(params.id);
      });


  }

  ngOnInit(): void {
  }

  getArtist(id: string) {
    this.spotifyService.getArtist(id)
      .subscribe(artist => this.artist = artist);
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id)
      .subscribe(topTracks => this.topTracks = topTracks);
  }


}
