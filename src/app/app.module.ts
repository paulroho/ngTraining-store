import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import TrackReducer from './redux/reducer/track.reducer';
import { StoreModule } from './@store/store.module';
import { TrackListComponent } from './components/track-list/track-list.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { AddTrackComponent } from './components/add-track/add-track.component';


export interface Track {
  id: number;
  title: string;
  artist: string;
}

export interface TrackState {
  tracks: Track[];
}

const initialState = { tracks: [] };
const reducer = new TrackReducer();

@NgModule({
  declarations: [AppComponent, TrackListComponent, ArtistListComponent, AddTrackComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, 
    StoreModule.forRoot<TrackState>(initialState, [reducer])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
