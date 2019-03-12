import { getSampleTracks } from './data';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TrackHttpClient {
  public fetchTracks(): Observable<Track[]> {
    return of(getSampleTracks()).pipe(delay(3000));
  }
}
