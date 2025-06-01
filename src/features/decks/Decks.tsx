import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store.ts'
import { fetchDecksTC } from './decks-thunks.ts'

export const Decks = () => {
  const decks = useAppSelector((state) => state.decksReducer.decks)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDecksTC());
  }, []);

  return (
    <div>
      <h1>Decks 🦝</h1>
      <AddNewDeckForm />
      <DecksList decks={decks} />
    </div>
  )
}
