import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Track } from 'src/app/track';

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

  public dispatch(action: 'addTrack' | 'removeTrack', track: Track): void {
    switch (action) {
      case 'addTrack': {
        const newId = this.value.playList.length;
        this.set('playList', [...this.value.playList, { ...track, id: newId }]);
        break;
      }
      case 'removeTrack': {
        const trackidToRemove = track.id;
        this.set('playList', this.value.playList.filter(t => t.id !== trackidToRemove));
        break;
      }
    }
  }

  private set(name: string, value: any) {
    this.subject.next({
      ...this.subject.value,
      [name]: value
    });
  }

  public select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }
}
