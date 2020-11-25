import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Artist } from '../artist';

@Component({
  selector: 'app-artist-list',
  template: `
    <h2>Artists</h2>
    <div class="artist-list">
      <div class="item" *ngFor="let artist of artists$ | async">
        <b>{{ artist.name }}</b>
      </div>
    </div>
  `,
  styles: []
})
export class ArtistListComponent {
  public artists$: Observable<Artist[]> = of([{name:'Nirvana'}, {name:'Johnny Cash'}, {name: 'Queen'}]);
}
