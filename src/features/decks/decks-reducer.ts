export type deckType = {
  isFavorite: boolean
  author: {
    id: string
    name: string
  }
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string //Date
  updated: string //Date
  cardsCount: number
} //? то, что с сервера пришло

const initialState = {
  decks: [] as any[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'getDecks':
      return {...state, decks: action.payload.decks }
    default:
      return state
  }
}

type DecksActions = any

// export const getDecksAC=(x)=>{
//   return {type: 'getDecks',decks: x}
// }
