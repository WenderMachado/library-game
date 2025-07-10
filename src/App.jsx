import { useState } from "react"

export default function App() {
  const [games, setGames] = useState([])
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  const addGame= (({title, cover})=>{
    const id = Math.floor(Math.random()* 10000)
    const game = {id, title, cover}
    setGames(state => [...state, game])
  })
  const handleSubmit = (ev)=>{
    ev.preventDefault()
    addGame({title, cover})
    setTitle("")
    setCover("")
  }
  return (
      <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input 
          type="text" 
          id="title" 
          value={title} 
          onChange={(ev) => setTitle(ev.target.value)} />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input 
          type="text" 
          id="cover" 
          value={cover} 
          onChange={(ev) => setCover(ev.target.value)} />
        </div>
        <button>Adicionar</button>
      </form>
      <div className="games">

      </div>
    </div>
  )
}


