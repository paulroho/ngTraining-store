import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTrackComponent } from './add-track/add-track.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { TrackListComponent } from './track-list/track-list.component';
import { StoreModule, ActionReducer, State } from '@ngrx/store';
import { playListReducer } from './redux/playlist.reducer';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from 'src/environments/environment';
import { TrackHttpClient } from './http-client';

export function logger(reducer: ActionReducer<any>): any {
  return storeLogger()(reducer);
}
export const metaReducers = environment.production ? [] : [logger];
export const reducers = { playList: playListReducer };
@NgModule({
  declarations: [AppComponent, TrackListComponent, ArtistListComponent, AddTrackComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, StoreModule.forRoot(reducers, {metaReducers})],
  providers: [TrackHttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
