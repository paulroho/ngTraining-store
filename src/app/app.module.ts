import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTrackComponent } from './add-track/add-track.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { TrackListComponent } from './track-list/track-list.component';
import Store, { Reducer } from './store/store';
import TrackReducer from './reducer/track.reducer';
import { StoreModule } from './store/store.module';


export interface Track {
  id: number;
  title: string;
  artist: string;
}

export interface TrackState {
  tracks: Track[];
}

const initialState = { tracks: [] };
const reducer = new TrackReducer<TrackState>();

@NgModule({
  declarations: [AppComponent, TrackListComponent, ArtistListComponent, AddTrackComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, 
    StoreModule.forRoot<TrackState>(initialState, [reducer])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
