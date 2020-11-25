import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RemoveTrackAction } from 'src/app/@store/actions/track.actions';
import { Store, Track } from 'src/app/@store/store';

@Component({
  selector: 'app-track-list',
  template: `
    <h2>Tracks</h2>
    <div class="track-list">
      <div class="item" *ngFor="let track of tracks$ | async">
        <b>{{ track.title }}</b>
        <span>{{ track.artist }}</span>
        <button (click)="removeTrack(track)">remove</button>
      </div>
    </div>
  `,
  styles: []
})
export class TrackListComponent {
  public tracks$: Observable<Track[]>;
  
  constructor(private store: Store) {
    this.tracks$ = this.store.select(state => state.tracks);
  }

  public removeTrack(track: Track) {
    console.log('track could not be added');
    this.store.dispatch(new RemoveTrackAction({
      track: track
    }));
  }
}
