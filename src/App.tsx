import {useState, useEffect} from 'react'

type CharacterType = {
  id: number,
  name: string,
  image: string
}

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(()=>{
    const getData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character")
      const json = await response.json();
      console.log(json)
      setCharacters(json.results)
    }
    getData()

  },[])
console.log(characters);
  return (
    <>
<div>
  {characters.map((character)=>{
    return (
      <div>
      <h1>{character.name}</h1>
      <img src={character.image}/>
      </div>
    )
  })}
</div>
    </>
  )
}

export default App
