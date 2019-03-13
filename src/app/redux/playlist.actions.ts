import { Action } from '@ngrx/store';
import { Track } from '../track';

export enum ActionTypes {
  AddTrack = 'ADD_TRACK',
  AddTracks = 'ADD_TRACKS',
  RemoveTrack = 'REMOVE_TRACK',
  LoadTracks = 'LOAD_TRACKS'
}

export class LoadTracks implements Action {
  readonly type = ActionTypes.LoadTracks;

  constructor() {}
}

export class AddTrack implements Action {
  readonly type = ActionTypes.AddTrack;

  constructor(public track: { title: string; artist: string }) {}
}

export class RemoveTrack implements Action {
  readonly type = ActionTypes.RemoveTrack;

  constructor(public track: Track) {}
}

export class AddTracks implements Action {
  readonly type = ActionTypes.AddTracks;

  constructor(public tracks: Track[]) {}
}
