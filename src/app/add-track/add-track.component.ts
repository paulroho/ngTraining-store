import { Component, OnInit } from '@angular/core';
import { Store } from 'src/redux/store';
import { AddTrackAction } from 'src/redux/actions';

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
  styles: []
})
export class AddTrackComponent {
  public artist: string;
  public title: string;

  constructor(private store: Store) {}
  public addTrack() {
    this.store.dispatch(
      new AddTrackAction({
        track: { id: null, artist: this.artist, title: this.title }
      })
    );
  }
}
