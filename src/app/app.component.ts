import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Track } from './track';
import { TrackHttpClient } from './html-client';
import { AddTrack, AddTracks, LoadTracks } from './redux/playlist.actions';

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
  constructor(private store: Store<{ playList: Track[] }>, private client: TrackHttpClient) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadTracks());
    this.client.fetchTracks().subscribe(tracks => {
      tracks.forEach(t => this.store.dispatch(new AddTrack(t)));
    });
  }
}
