import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import AddTrackAction from '../store/actions/add-track.action';
import Store from '../store/store';

@Component({
  selector: 'app-add-track',
  template: `
    <h2>Add a track to playlist</h2>
    <div style="text-align: center">
      <input [(ngModel)]="title" placeholder="Title" />
      <input [(ngModel)]="artistName" placeholder="Artist" />
      <button (click)="addTrack()">add</button>
      <div></div>
    </div>
  `,
  styles: []
})
export class AddTrackComponent {
  public artistName: string;
  public title: string;

  constructor(private store: Store) {}

  public addTrack() {
    this.store.dispatch(new AddTrackAction({
      title: this.title, 
      artist: {name: this.artistName},
    }));
  }
}
