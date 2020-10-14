import {
  TrackActions,
  TrackActionType,
} from '../actions/track.action';
import { Reducer } from '../../@store/store';
import { TrackState } from '../../app.module';

export default class TrackReducer implements Reducer<TrackState, TrackActions> {
  public reduce(state: TrackState, action: TrackActions) {
    switch (action.type) {
      case TrackActionType.ADD_TRACK:
        return {
          ...state,
          tracks: [
            ...state.tracks,
            {
              id: state.tracks.length,
              title: action.payload.title,
              artist: action.payload.artist,
            },
          ],
        };
      case TrackActionType.REMOVE_TRACK: 
        // todo: remove track; 
        return state;
      default:
        return state;
    }
  }
}
