import { ɵNullViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Artist } from '../artist';
import RemoveTrackAction from './actions/remove-track.action';
import AddTrackReducer from './reducers/add.track.reducer';
import RemoveTrackReducer from './reducers/remove.track.reducer';

export interface Action {
    name: string;
    payload: any;
}

export interface Reducer {
    reduce<T>(state: State, action: Action): State
    isApplicable(action: Action): boolean
}

export interface State {
    tracks: Track[];
}

export interface Track {
    id: number;
    title: string;
    artist: Artist;
  }  

@Injectable()
export default class Store {
    private reducers: Reducer[];
    private state: BehaviorSubject<State>;

    constructor() {
        const initialState = { tracks: [] };
        this.reducers = [new AddTrackReducer(), new RemoveTrackReducer()];
        this.state = new BehaviorSubject(initialState);

        this.state.subscribe(console.log);
    }

    public dispatch<T>(action: Action): void {
        this.reducers.filter(r => r.isApplicable(action)).forEach(reducer => {
            const newState = reducer.reduce(this.state.value, action);
            this.state.next(newState);
        })
    }

    public select<T>(selector: (state: State) => T): Observable<T> {
        return this.state.pipe(map(selector));
    }
}