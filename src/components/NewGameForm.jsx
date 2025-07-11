import { useState } from "react"
import PropTypes from "prop-types"
import TextInput from "./TextInput"

NewGameForm.prototype={
  addGame:PropTypes.func
}

export default function NewGameForm({addGame}){
   const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  const handleSubmit = (ev)=>{
    ev.preventDefault()
    addGame({title, cover})
    setTitle("")
    setCover("")
  }
  return(
     <form onSubmit={handleSubmit}>
       <TextInput label="titulo " value={title} setValue={setTitle} />
       <TextInput label ="Capa:" value={cover} setValue={setCover}/>
        <button>Adicionar</button>
      </form>
  )
}