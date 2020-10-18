import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTrackComponent } from './add-track/add-track.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { TrackListComponent } from './track-list/track-list.component';
import { StoreModule } from './@store/store.module';
import TrackReducer from './@store/reducers/track.reducer';

const initialState = { tracks: [] };
const reducers = [new TrackReducer()];

@NgModule({
  declarations: [AppComponent, TrackListComponent, ArtistListComponent, AddTrackComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, StoreModule.forRoot(initialState, reducers)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
