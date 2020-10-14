import { Component } from '@angular/core';
import Store from 'src/app/@store/store';
import { TrackState } from 'src/app/app.module';
import { AddTrackAction } from 'src/app/redux/actions/track.action';

@Component({
  selector: 'app-add-track',
  template: `
    <h2>Add a track to playlist</h2>
    <div style="text-align: center">
      <input [(ngModel)]="title" placeholder="Title" />
      <input [(ngModel)]="artist" placeholder="Artist" />
      <button (click)="addTrack()">add</button>
      <div></div>
    </div>
  `,
  styles: [],
})
export class AddTrackComponent {
  public artist: string;
  public title: string;

  constructor(private store: Store<TrackState>) {}

  public addTrack() {
    this.store.dispatch(
      new AddTrackAction({ artist: this.artist, title: this.title })
    );
  }
}
