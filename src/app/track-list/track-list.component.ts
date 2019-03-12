import { Component } from '@angular/core';
import { Store } from 'src/redux/store';
import { Track } from '../track';

@Component({
  selector: 'app-track-list',
  template: `
    <h2>Tracks</h2>
    <div class="track-list">
      <div class="item" *ngFor="let track of (playList$ | async)">
        <b>{{ track.title }}</b>
        <span>{{ track.artist }}</span>
        <button (click)="removeTrack(track)">remove</button>
      </div>
    </div>
  `,
  styles: []
})
export class TrackListComponent {
  public playList$ = this.store.select<Track[]>('playList');

  constructor(private store: Store) {}

  public removeTrack(track: Track) {
    this.store.dispatch('removeTrack', track);
  }
}
