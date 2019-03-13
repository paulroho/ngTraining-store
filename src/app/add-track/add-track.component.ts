import { Component } from '@angular/core';
import { AddTrack } from '../redux/playlist.actions';
import { Store } from '@ngrx/store';
import { Track } from '../track';

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

  constructor(private store: Store<{ playList: Track[] }>) {}


  public addTrack() {
    this.store.dispatch(new AddTrack({artist: this.artist, title: this.title}));
  }
}
