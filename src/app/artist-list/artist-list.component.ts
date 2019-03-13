import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Track } from '../track';
import { map } from 'rxjs/operators';

export const selectArtists = (tracks: Track[]): string[] => {
  const artist = tracks.map(t => t.artist);
  const distinctArtists = new Set(artist);

  return Array.from(distinctArtists.values());
};

@Component({
  selector: 'app-artist-list',
  template: `
    <h2>Artists</h2>
    <div class="artist-list">
      <div class="item" *ngFor="let artist of (artists$ | async)">
        <b>{{ artist }}</b>
      </div>
    </div>
  `,
  styles: []
})
export class ArtistListComponent {
  artists$: Observable<string[]> = this.store.pipe<Track[]>(select('playList')).pipe(map(selectArtists));

  constructor(private store: Store<{ playList: Track[] }>) {}
}
