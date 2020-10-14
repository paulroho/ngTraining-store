import { Component, OnInit } from '@angular/core';
import AddTrackAction from '../actions/add-track.action';
import { TrackState } from '../app.module';
import Store from '../store/store';

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



  constructor(private store: Store<TrackState>) {

  }

  public addTrack() {
    this.store.dispatch(
      new AddTrackAction({ artist: this.artist, title: this.title })
    );
  }
}
