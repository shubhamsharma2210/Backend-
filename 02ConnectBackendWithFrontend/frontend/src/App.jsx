
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get('/jokes')
    .then((response) => {
      setJokes(response.data)
    }).catch((error) => console.log(error))
  })

  return (
    <>
    <h1>This is shubham sharma learned backend</h1>
    <p>JOKES : {jokes.length}</p>
    {
      jokes.map((element,index) => (
        <div key={element.id} >
          <h3>{element.title}</h3>
          <p>{element.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
