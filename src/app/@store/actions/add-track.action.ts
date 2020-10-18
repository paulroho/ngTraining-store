import { Action } from '../store';

export default class AddTrackAction implements Action<{title: string; artist: string }> {
    public name = "AddTrack";

    constructor(public payload: {title: string; artist: string}) {}
}