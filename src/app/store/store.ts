import { ɵNullViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import TrackReducer from './reducers/track.reducer';

export interface Action {
    name: string;
    payload: any;
}

export interface Reducer {
    reduce<T>(state: State, action: Action): State
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
export default class Store {
    private reducers: Reducer[];
    private state: BehaviorSubject<State>;

    constructor() {
        const initialState = { tracks: [] };
        this.reducers = [new TrackReducer()];
        this.state = new BehaviorSubject(initialState);

        this.state.subscribe(console.log);
    }

    public dispatch<T>(action: Action): void {
        this.reducers.forEach(reducer => {
            const newState = reducer.reduce(this.state.value, action);
            this.state.next(newState);
        })
    }

    public select<T>(selector: (state: State) => T): Observable<T> {
        return this.state.pipe(map(selector));
    }
}