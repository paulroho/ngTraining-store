import { Component } from '@angular/core';
import { Store } from 'src/redux/store';
import { map } from 'rxjs/operators';
import { Track } from '../track';

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
  public artists$ = this.store
    .select<Track[]>('playList')
    .pipe(map(tracks => new Set(tracks.map(track => track.artist))));

  constructor(private store: Store) {}
}
