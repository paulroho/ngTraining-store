import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import RemoveTrackAction from '../store/actions/remove-track.action';
import Store, { Track } from '../store/store';

@Component({
  selector: 'app-track-list',
  template: `
    <h2>Tracks</h2>
    <div class="track-list">
      <div class="item" *ngFor="let track of tracks$ | async">
        <b>{{ track.title }}</b>
        <span>{{ track.artist.name }}</span>
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
    console.log("removing");
    this.store.dispatch(new RemoveTrackAction({id: track.id}));
  }
}
