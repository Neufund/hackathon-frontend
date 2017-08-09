import { combineReducers } from 'redux';
import { routerReducer as router } from 'redux-router-kit';
import { reducer as form } from 'redux-form';
import icoParameters, { IcoParametersState } from './icoParameters';
import icoState, { IcoStateState } from './icoState';
import myStats, { MyStatsState } from './myStats';
import commit, { CommitState } from './commit';

export interface AppState {
  readonly icoParameters: IcoParametersState;
  readonly icoState: IcoStateState;
  readonly myStats: MyStatsState;
  readonly commit: CommitState;
  readonly router: any;
  readonly form: any;
}

export default combineReducers<AppState>({
  router,
  icoParameters,
  icoState,
  myStats,
  form,
  commit,
});
