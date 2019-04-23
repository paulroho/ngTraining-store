import { Component } from '@angular/core';
import { getSampleTracks } from '../data';
import { Track } from '../track';
import { Select, Store } from '@ngxs/store';
import { TrackState } from '../store/tracks.state';
import { Observable } from 'rxjs';
import { RemoveTrackAction } from '../store/track.actions';

@Component({
  selector: 'app-track-list',
  template: `
    <h2>Tracks</h2>
    <div class="track-list">
      <div class="item" *ngFor="let track of (playList | async)">
        <b>{{ track.title }}</b>
        <span>{{ track.artist }}</span>
        <button (click)="removeTrack(track)">remove</button>
      </div>
    </div>
  `,
  styles: []
})
export class TrackListComponent {
  @Select(TrackState.tracks)
  public playList: Observable<Track[]>;

  constructor(private store: Store) {}

  public removeTrack(track: Track) {
    this.store.dispatch(new RemoveTrackAction({ trackId: track.id }));
  }
}
