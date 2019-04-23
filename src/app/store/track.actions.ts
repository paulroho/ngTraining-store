import { Track } from '../track';

export enum ActionsType {
  ADD_TRACK = '[TRACKS] add track',
  REMOVE_TRACK = '[TRACKS] remove track',
  INITIALIZE_TRACKS = '[TRACKS] initilaize tracks'
}

export class AddTrackAction {
  public static readonly type = ActionsType.ADD_TRACK;
  constructor(public payload: { track: Track }) {}
}

export class RemoveTrackAction {
  public static readonly type = ActionsType.REMOVE_TRACK;
  constructor(public payload: { trackId: number }) {}
}

export class InitilializeTracksAction {
  public static readonly type = ActionsType.INITIALIZE_TRACKS;
  constructor() {}
}
