import React, {useState} from 'react'

function App() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [message, setMessage] = useState("")

  const submitToNotion = async (e)=>{
    e.preventDefault()
    
    try{
      console.log("initiating fetch!  ")
      const response = await fetch("http://localhost:4000/submitForm", {
        method: "POST",
        body: JSON.stringify({name: name, number: number, message: message}),
        headers:{
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
      const json = await response.json()
      console.log("fetch done!  ", json)
    }
    catch(err){
      console.log("error:  ",err.message)
    }
  }

  return (
    <div className="App">
      <div style={{maxWidth: "500px", margin: "0 auto"}}>
        <h1>data bechna hai?</h1>

        <p>Name</p>
        <input type="text" id="name" onChange={(e)=> setName(e.target.value)}/>
        
        <p>Number</p>
        <input type="text" id="number" onChange={(e)=> setNumber(e.target.value)}/>
        
        <p>Message</p>
        <textarea id="message" rows={10} cols={25} onChange={(e)=> setMessage(e.target.value)}/>

        <div>
          <button onClick={submitToNotion}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default App
