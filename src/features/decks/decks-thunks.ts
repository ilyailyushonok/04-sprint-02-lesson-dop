import { AppThunk } from '../../app/store.ts'
import { apiDecks } from './decks-api.ts'

export const fetchDecksTC = (): AppThunk => {  // <- Используем AppThunk
  return async (dispatch, getState) => {
    try {
      const decks = await apiDecks.getDecks();
      dispatch({ type: 'getDecks', payload: { decks } });
    } catch (err) {
      console.error('Error fetching decks:', err);
    }
  };
};