import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { TrackState } from '../store/tracks.state';

@Component({
  selector: 'app-artist-list',
  template: `
    <h2>Artists</h2>
    <div class="artist-list">
      <div class="item" *ngFor="let artist of (artists | async)">
        <b>{{ artist }}</b>
      </div>
    </div>
  `,
  styles: []
})
export class ArtistListComponent {
  @Select(TrackState.artists)
  public artists: Observable<string[]>;
}
