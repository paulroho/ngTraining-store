import { Component, OnInit } from '@angular/core';
import { TrackHttpClient } from './http-client';
import { Store } from 'src/redux/store';
import { AddTrackAction } from 'src/redux/actions';
import { TrackClient } from './track-client';

@Component({
  selector: 'app-root',
  template: `
    <h1 style="border: 0;font-size: 3rem;">Playlist</h1>
    <app-track-list></app-track-list>
    <app-artist-list></app-artist-list>
    <app-add-track></app-add-track>
  `
})
export class AppComponent implements OnInit {
  constructor(private trackClient: TrackClient, private store: Store) {}

  public ngOnInit() {
    this.trackClient.fetchTracks().subscribe(tracks => {
      tracks.forEach(track =>
        this.store.dispatch(new AddTrackAction({ track }))
      );
    });
  }
}
