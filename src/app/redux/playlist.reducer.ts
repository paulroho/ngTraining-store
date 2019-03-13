import { Action } from '@ngrx/store';
import { ActionTypes, AddTrack, RemoveTrack } from './playlist.actions';
import { Track } from '../track';

export const initialState: Track[] = [];

export function playListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.AddTrack: {
      const currentId = state.length;
      const addTrackAction = action as AddTrack;
      const newTrack = { ...addTrackAction.track, id: currentId };
      return [...state, newTrack];
    }
    case ActionTypes.RemoveTrack:
      return state.filter(t => (action as RemoveTrack).track.id !== t.id);
    default:
      return state;
  }
}
