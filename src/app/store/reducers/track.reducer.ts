import { Action, Reducer, State } from '../store';

export default class TrackReducer implements Reducer {
    reduce<T>(state: State, action: Action<T>): State {
        const { title, artist } = action.payload as any;
        const newId = state.tracks.length;

        return {
            ...state, 
            tracks: [...state.tracks, {id: newId, title, artist}] 
        };
    }
}