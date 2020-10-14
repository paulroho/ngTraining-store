import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import Store, { INITIALSTATE, Reducer, REDUCERS } from './store';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class StoreModule {
  static forRoot<T>(
    initialState: T,
    reducers: Reducer<T, any>[]
  ): ModuleWithProviders<StoreModule> {
    return {
      ngModule: StoreModule,
      providers: [
        {
          provide: INITIALSTATE,
          useValue: initialState,
        },
        {
          provide: REDUCERS,
          useValue: reducers,
        },
        {
          provide: Store,
          useClass: Store,
          deps: [INITIALSTATE, REDUCERS],
        },
      ],
    };
  }
}
