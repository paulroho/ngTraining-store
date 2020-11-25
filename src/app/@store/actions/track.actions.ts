import { Action, Track } from '../store';

export enum ActionType {
    AddTrack = "AddTrack",
    RemoveTrack = "RemoveTrack",
}
export class AddTrackAction implements Action<{title: string; artist: string }> {
    public name = ActionType.AddTrack;

    constructor(public payload: {title: string; artist: string}) {}
}

export class RemoveTrackAction implements Action<{track: Track}> {
    public name = ActionType.RemoveTrack;

    constructor(public payload: { track: Track; }) {}
}

export type TrackAction = AddTrackAction | RemoveTrackAction;