import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Store} from 'src/app/@store/store';

@Component({
  selector: 'app-artist-list',
  template: `
    <h2>Artists</h2>
    <div class="artist-list">
      <div class="item" *ngFor="let artist of artists$ | async">
        <b>{{ artist }}</b>
      </div>
    </div>
  `,
  styles: []
})
export class ArtistListComponent {
  public artists$ : Observable<string[]>;

  constructor(private store: Store) {
    const tracks$ = this.store.select(state => state.tracks);
    this.artists$ = tracks$.pipe(map(tracks => [...new Set(tracks.map(track => track.artist))]));
  }
}
