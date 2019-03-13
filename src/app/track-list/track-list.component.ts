import { Component } from '@angular/core';
import { getSampleTracks } from '../data';
import { Track } from '../track';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { RemoveTrack } from '../redux/playlist.actions';

@Component({
  selector: 'app-track-list',
  template: `
    <h2>Tracks</h2>
    <div class="track-list">
      <div class="item" *ngFor="let track of playList$ | async">
        <b>{{ track.title }}</b>
        <span>{{ track.artist }}</span>
        <button (click)="removeTrack(track)">remove</button>
      </div>
    </div>
  `,
  styles: []
})
export class TrackListComponent {
  playList$: Observable<Track[]> = this.store.pipe(select('playList'));

  constructor(private store: Store<{ playList: Track[] }>) {}

  public removeTrack(track: Track) {
    this.store.dispatch(new RemoveTrack(track));
  }
}
