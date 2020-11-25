import { Action, Reducer, State } from '../store';

export default class TrackReducer implements Reducer {
    reduce(state: State, action: Action): State {
        const { title, artist } = action.payload;
        const newId = state.tracks.length;

        return {
            ...state, 
            tracks: [...state.tracks, {id: newId, title, artist}] 
        };
    }
}