import { apiDecks } from './decks-api.ts'
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { AppRootState } from '../../app/store.ts'

export const fetchDecksTC = (): ThunkAction<void, AppRootState, unknown, AnyAction> => {
  return async (dispatch) => {  // thunk должен возвращать функцию с dispatch
    try {
      const decks = await apiDecks.getDecks();
      dispatch({ type: 'getDecks', payload: { decks } });
    } catch (err) {
      console.error('fetchDecksTC error:', err);
      dispatch({ type: 'getDecksFailed', payload: { error:'fetchDecksTC error' } });
    }
  };
};