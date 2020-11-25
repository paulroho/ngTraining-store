import { Inject, Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TrackAction } from './actions/track.actions';

export const INITIALSTATE = new InjectionToken("InitialState");
export const REDUCERS = new InjectionToken("Reducers");

export interface Action<T> {
    name: string;
    payload: T;
}

export interface Reducer {
    reduce<T>(state: State, action: TrackAction): State
}

export interface State {
    tracks: Track[];
}

export interface Track {
    id: number;
    title: string;
    artist: string;
  }  

@Injectable()
export class Store {
    private reducers: Reducer[];
    private state: BehaviorSubject<State>;

    constructor(@Inject(INITIALSTATE) initialState: { tracks: Track[] },
                @Inject(REDUCERS) reducers) {
        this.state = new BehaviorSubject(initialState);
        this.reducers = reducers;

        this.state.subscribe(console.log);
    }

    public dispatch<T>(action: TrackAction): void {
        this.reducers.forEach(reducer => {
            const newState = reducer.reduce(this.state.value, action);
            this.state.next(newState);
        })
    }

    public select<T>(selector: (state: State) => T): Observable<T> {
        return this.state.pipe(map(selector));
    }
}