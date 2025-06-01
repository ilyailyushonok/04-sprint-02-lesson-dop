import { AppThunk } from '../../app/store.ts'
import { apiDecks } from './decks-api.ts'

export const fetchDecksTC = (): AppThunk => {
  return async (dispatch) => {
    try {
      const decks = await apiDecks.getDecks();
      dispatch({ type: 'getDecks', payload:{decks}});
    } catch (err) {
      console.error('Error fetching decks:', err);
    }
  };
};
export const addDeskTC = ({ name }: {name: string }): AppThunk => {
  return async (dispatch) => {
    try {
      const deck = await apiDecks.addDesk(name)
      dispatch({ type: 'addDesk', payload: { deck } })
    } catch (err) {
      console.error('Error add desk:', err)
    }
  }
}