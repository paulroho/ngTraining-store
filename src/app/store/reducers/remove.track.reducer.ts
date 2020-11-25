import { Action, Reducer, State } from '../store';

export default class RemoveTrackReducer implements Reducer {
    isApplicable(action: Action): boolean {
        return action.name === "RemoveTrack";
    }
    reduce(state: State, action: Action): State {
        const id = action.payload.id;

        return {
            ...state, 
            tracks: state.tracks.filter(t => t.id !== id) 
        };
    }
}