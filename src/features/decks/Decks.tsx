import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'
import { useEffect } from 'react'
import { useAppSelector } from '../../app/store.ts'
import { fetchDecksTC } from './decks-thunks.ts'
import { useDispatch } from 'react-redux'

export const Decks = () => {
  const decks = useAppSelector((state) => state.decksReducer.decks)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDecksTC())
  },[])

  return (
    <div>
      <h1>Decks 🦝</h1>
      <AddNewDeckForm />
      <DecksList decks={decks} />
    </div>
  )
}
