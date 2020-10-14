import AddTrackAction from '../actions/add-track.action';
import { Action, Reducer } from '../store/store';

export default class TrackReducer<T> implements Reducer<T, any> {
  public reduce<T>(state: T, action: Action<T>) {
    const { title, artist } = action.payload as any;
    const tracks = (state as any).tracks as any;
    const newId = tracks.length;
    
    return {
      ...state,
      tracks: [...tracks, { id: newId, title, artist }],
    };
  }
}
