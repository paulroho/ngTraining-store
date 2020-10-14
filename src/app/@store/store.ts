import { Inject, Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const INITIALSTATE = new InjectionToken('initialState');
export const REDUCERS = new InjectionToken('reducers');

export interface Action<P> {
  type: string;
  payload: P;
}

export interface Reducer<T, A> {
  reduce(state: T, action: A): T;
}

@Injectable()
export default class Store<T> {
  private reducer: Reducer<T, any>[];
  private state: BehaviorSubject<T>;

  public constructor(
    @Inject(INITIALSTATE) initialState: T,
    @Inject(REDUCERS) reducer: Reducer<T, any>[]
  ) {
    this.reducer = reducer;
    this.state = new BehaviorSubject(initialState);

    this.state.subscribe(console.log);
  }

  public dispatch<P>(action: Action<P>): void {
    this.reducer.forEach((reducer) => {
      const newState = reducer.reduce(this.state.value, action);
      this.state.next(newState);
    });
  }

  public select<S>(selector: (state: T) => S): Observable<S> {
    return this.state.pipe(map(selector));
  }
}
