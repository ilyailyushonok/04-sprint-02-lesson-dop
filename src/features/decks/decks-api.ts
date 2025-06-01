import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})
export const apiDecks={
  getDecks(){
   return  instance.get(`/v2/decks`).then(res => res.data.items )
  },
  addDesk(name:string){
   return instance.post(`/v1/decks`, { name }).then((res) => res.data)
  }
}
