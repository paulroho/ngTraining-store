import { Action } from '../store';

export default class RemoveTrackAction implements Action {
    public name = "RemoveTrack";

    constructor(public payload: {id: number}) {}
}