import { Component, OnDestroy } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { TrackState, Track } from '../app.module';
import Store from '../store/store';

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
  styles: [],
})
export class TrackListComponent implements OnDestroy {
  private unscubscribeStream$$ = new Subject();
  public tracks$: Observable<Track[]>;

  constructor(private store: Store<TrackState>) {
    this.tracks$ = this.store.select((state) => state.tracks);
  }
  ngOnDestroy(): void {
    this.unscubscribeStream$$.next();
  }

  public removeTrack(track: Track) {
    console.log('track could not be added');
  }
}
