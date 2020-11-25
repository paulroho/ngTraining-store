import { Action, Reducer, State } from '../store';

export default class AddTrackReducer implements Reducer {
    isApplicable(action: Action): boolean {
        return action.name === "AddTrack";
    }
    reduce(state: State, action: Action): State {
        const { title, artist } = action.payload;
        const newId = state.tracks.length;

        return {
            ...state, 
            tracks: [...state.tracks, {id: newId, title, artist}] 
        };
    }
}