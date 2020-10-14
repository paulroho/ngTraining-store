import { Action } from 'src/app/@store/store';

export enum TrackActionType {
  ADD_TRACK = '[Track] ADD_TRACK',
  REMOVE_TRACK = '[Track] REMOVE_TRACK',
}

export class AddTrackAction
  implements Action<{ title: string; artist: string }> {
  public readonly type = TrackActionType.ADD_TRACK;

  constructor(public payload: { title: string; artist: string }) {}
}

export class RemoveTrackAction implements Action<{ id: string }> {
  public readonly type = TrackActionType.REMOVE_TRACK;

  constructor(public payload: { id: string }) {}
}

export type TrackActions = AddTrackAction | RemoveTrackAction;
