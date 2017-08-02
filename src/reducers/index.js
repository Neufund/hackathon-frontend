import { combineReducers } from 'redux';
import { routerReducer as router } from 'redux-router-kit';
import { reducer as form } from 'redux-form';
import icoParameters from './icoParameters';
import icoState from './icoState';
import myStats from './myStats';

export default combineReducers({
  router,
  icoParameters,
  icoState,
  myStats,
  form,
});
