import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { InitilializeTracksAction } from './store/track.actions';

@Component({
  selector: 'app-root',
  template: `
    <h1 style="border: 0;font-size: 3rem;">Playlist</h1>
    <app-track-list></app-track-list>
    <app-artist-list></app-artist-list>
    <app-add-track></app-add-track>
  `
})
export class AppComponent {
  constructor(private store: Store) {
    this.store.dispatch(new InitilializeTracksAction());
  }
}
