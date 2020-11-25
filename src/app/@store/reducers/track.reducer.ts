import { ActionType, AddTrackAction, RemoveTrackAction, TrackAction } from '../actions/track.actions';
import { Reducer, State } from '../store';

export default class TrackReducer implements Reducer {
    reduce<T>(state: State, action: TrackAction): State {
        switch (action.name) {
            case ActionType.AddTrack:
                const addAction = action as AddTrackAction;
                const newId = state.tracks.length;
        
                return {
                    ...state, 
                    tracks: [...state.tracks, {
                        id: newId, 
                        title:addAction.payload.title, 
                        artist:addAction.payload.artist}] 
                };

                case ActionType.RemoveTrack:
                    console.log("TODO: REMOVE");
                    const removeAction = action as RemoveTrackAction;
                    return {
                        ...state,
                        tracks: state.tracks.filter(track => track.id == removeAction.payload.track.id)
                    }

                default:
                    throw Error();
        }
    }
}