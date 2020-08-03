import React, { useEffect, useState } from "react"
import axios from "axios"
import CharacterCard from "./CharacterCard"
import { Container, Row } from "reactstrap";

export default function Character (){
    const [characters, setCharacters] = useState([]);

useEffect (() =>{
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response =>{
        setCharacters(response.data.results)
        console.log('Finally you got something right Morty',response)

})
    .catch(error => console.log('you failed me Morty', error))
},[])

return(
<Container> 
<Row>
    {characters.map(character =>{
        return <CharacterCard character={character} key={character.id}/>
    })}
</Row>

</Container>


)}








