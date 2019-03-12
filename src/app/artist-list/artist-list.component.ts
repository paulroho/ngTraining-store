import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  template: `
    <h2>Artists</h2>
    <div class="artist-list">
      <div class="item" *ngFor="let artist of artists">
        <b>{{ artist }}</b>
      </div>
    </div>
  `,
  styles: []
})
export class ArtistListComponent {
  public artists = ['Nirvana', 'Johnny Cash', 'Queen'];
}
