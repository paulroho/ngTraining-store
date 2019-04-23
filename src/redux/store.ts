import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Track } from 'src/app/track';
import { Actions } from './actions';

export interface State {
  playList: Track[];
}

const initialState: State = {
  playList: []
};

export class Store {
  private subject = new BehaviorSubject<State>(initialState);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  private get value(): any {
    return this.subject.value;
  }

  public dispatch(action: Actions): void {
    const newState = this.reduce(action, this.value);
    this.subject.next(newState);
  }

  private reduce(action: Actions, currentState: State): State {
    switch (action.identifier) {
      case 'add-track': {
        const newId = currentState.playList.length;
        return {
          ...currentState,
          playList: [
            ...currentState.playList,
            { ...action.payload.track, id: newId }
          ]
        };
      }
      case 'remove-track': {
        const trackidToRemove = action.payload.id;
        return {
          ...currentState,
          playList: [
            ...currentState.playList.filter(t => t.id !== trackidToRemove)
          ]
        };
      }
      default: {
        return currentState;
      }
    }
  }

  public select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }
}
