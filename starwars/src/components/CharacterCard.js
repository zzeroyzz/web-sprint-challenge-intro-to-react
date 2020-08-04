import React from "react"
import styled from "styled-components";

import {
    Card, //<-- these come from the names of the classes below
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
    CardLink,
    Col
  } from "reactstrap";

const CardBody1 =styled.div`
color:red;
font-size:2rem;`


const CharacterCard = ({ character }) => {
    return(
        <Col xs="3" md="3" xl="4">
        <Card>
        {/* 
      pass props to Card as declared by its properties in docs. 
      */}
        {/* Card, CardHeader, CardBody, CardTitle, and CardText all on reactstrap "Card" component page*/}

        
        <CardBody style={{backgroundColor: 'black'}}>
             <CardHeader tag="h1">Card ID: {character.id}</CardHeader>
            <CardImg src= {character.image}/>
            <CardTitle tag="h2">Name: {character.name}</CardTitle>
            <CardText tag="h3">Species: {character.species}</CardText>
            <CardText tag="h3">Gender: {character.gender}</CardText>
            <CardText tag="h3">Status: {character.status}</CardText>
            <CardLink href={character.url}>Character</CardLink>
            <CardLink href={character.episode}>Episode</CardLink>




           
        </CardBody>
         
        {/*You can pass in classNames to each component from reactstrap, per their propType documentation.
        These classes can be classes we created in styles.css (pink) or bootstrap CSS (like text-muted) */}

        {/* <CardFooter className="text-muted">
          origin: {character.origin}
        </CardFooter> */}
      </Card>
      </Col>
    )
    
        }
export default CharacterCard;

