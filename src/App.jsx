import { useState } from "react"
import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"

export default function App() {
  const [games, setGames] = useState(()=>{
    const storedGames = localStorage.getItem('obc-game-lib')
    if(!storedGames) return []
  
    return JSON.parse(storedGames)
  })
 

  const addGame= (({title, cover})=>{
    const id = Math.floor(Math.random()* 10000)
    const game = {id, title, cover}
    setGames(state =>{
    const newState = [...state, game]
    localStorage.setItem("obc-game-lib", JSON.stringify(newState))
    return newState
    } )
  })

const removeGame = (id) => {
  const newState = games.filter(game => game.id !== id)
  setGames(newState)
  localStorage.setItem("obc-game-lib", JSON.stringify(newState))
}
  
  return (
      <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGame={addGame} />
     <div className="games">
        {games.map((game) => (
          <Game 
          key={game.id}
          title={game.title}
          cover={game.cover}
          onRemove={()=>removeGame(game.id)}
          />
         ))}
      </div>
    </div>
  )
}


