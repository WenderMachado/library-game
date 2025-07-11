



export default function TextInput({label, value, setValue}){

  return(
     <div>
          <label htmlFor="title">{label}</label>
          <input 
          type="text" 
          id="title" 
          value={value} 
          onChange={(ev) => setValue(ev.target.value)} />
     </div>
  )
}