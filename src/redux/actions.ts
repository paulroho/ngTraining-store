import { Track } from 'src/app/track';

export type Actions =
  | {
      identifier: 'add-track';
      payload: { track: Track };
    }
  | {
      identifier: 'remove-track';
      payload: { id: number };
    };

export class AddTrackAction {
  public identifier: 'add-track' = 'add-track';
  constructor(public payload: { track: Track }) {}
}

export class RemoveTrackAction {
  public identifier: 'remove-track' = 'remove-track';
  constructor(public payload: { id: number }) {}
}
