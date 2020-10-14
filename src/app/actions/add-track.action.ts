import { Action } from '../store/store';

export default class AddTrackAction
  implements Action<{ title: string; artist: string }> {
  public name = 'addTrack';

  constructor(public payload: { title: string; artist: string }) {}
}
