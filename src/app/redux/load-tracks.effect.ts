import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TrackHttpClient } from '../http-client';
import { ActionTypes, AddTracks } from './playlist.actions';

@Injectable()
export class MovieEffects {
  @Effect()
  loadTracks$ = this.actions$.pipe(
    ofType(ActionTypes.LoadTracks),
    mergeMap(() => this.trackService.fetchTracks().pipe(map(tracks => new AddTracks(tracks), catchError(() => EMPTY))))
  );

  constructor(private actions$: Actions, private trackService: TrackHttpClient) {}
}
