import { Component, OnInit } from '@angular/core';
import { getSampleTracks } from '../data';

@Component({
  selector: 'app-track-list',
  template: `
    <h2>Tracks</h2>
    <div class="track-list">
      <div class="item" *ngFor="let track of playList">
        <b>{{ track.title }}</b>
        <span>{{ track.artist }}</span>
        <button (click)="removeTrack(track)">remove</button>
      </div>
    </div>
  `,
  styles: []
})
export class TrackListComponent {
  public playList = getSampleTracks();


  public removeTrack(track: Track) {
    console.log('track could not be added');
  }
}
