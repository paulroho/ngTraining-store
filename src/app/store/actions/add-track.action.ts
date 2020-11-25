import { Artist } from 'src/app/artist';
import { Action } from '../store';

export default class AddTrackAction implements Action {
    public name = "AddTrack";

    constructor(public payload: {title: string; artist: Artist}) {}
}