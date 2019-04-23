import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Track } from '../track';
import { TrackClient } from '../track-client';
import {
  AddTrackAction,
  RemoveTrackAction,
  InitilializeTracksAction
} from './track.actions';

export interface TrackStateModel {
  tracks: Track[];
  initalized: boolean;
}

@State<TrackStateModel>({
  name: 'tracks',
  defaults: {
    tracks: [],
    initalized: false
  }
})
export class TrackState {
  constructor(private trackClient: TrackClient) {}

  @Selector()
  public static tracks(state: TrackStateModel): Track[] {
    return state.tracks;
  }

  @Selector()
  public static artists(state: TrackStateModel): string[] {
    return Array.from(new Set(state.tracks.map(track => track.artist)));
  }

  @Action(AddTrackAction)
  public addTrack(
    ctx: StateContext<TrackStateModel>,
    { payload }: AddTrackAction
  ) {
    ctx.patchState({ tracks: [...ctx.getState().tracks, payload.track] });
  }

  @Action(RemoveTrackAction)
  public removeTrack(
    ctx: StateContext<TrackStateModel>,
    { payload }: RemoveTrackAction
  ) {
    const tracks = ctx.getState().tracks;
    ctx.patchState({
      tracks: [...tracks.filter(t => t.id !== payload.trackId)]
    });
  }

  @Action(InitilializeTracksAction)
  public initializeTracks(ctx: StateContext<TrackStateModel>) {
    ctx.patchState({ tracks: [], initalized: false });
    this.trackClient.fetchTracks().subscribe(tracks => {
      ctx.patchState({ tracks, initalized: true });
    });
  }
}
