import s from './DecksList.module.css'
import { deckType } from '../decks-reducer.ts'
type Props = {
  decks:deckType[]
}

export const DecksList = ({decks}:Props) => {
  return <ul className={s.list}>
    {decks.map(d => (
      <li key={d.id}>
        <h2>{d.name}</h2>
        <div>Author: {d.author.name}</div>
        <div>Created: {d.created}</div>
        <div>Updated:{d.updated}</div>
      </li>
    ))}
  </ul>
}
