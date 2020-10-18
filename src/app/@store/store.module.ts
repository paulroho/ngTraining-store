import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, INITIALSTATE, Reducer,  REDUCERS,  Track } from './store';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StoreModule {
static forRoot(initialState: { tracks: Track[]; }, reducers: Reducer[] ): ModuleWithProviders {
    return {
      ngModule: StoreModule,
      providers: [
        {
          provide: INITIALSTATE,
          useValue: initialState
        },
        {
          provide: REDUCERS,
          useValue: reducers
        },
        {
          provide: Store,
          useClass: Store,
          deps: [INITIALSTATE, REDUCERS]
        }
      ]
    };
  }
}
