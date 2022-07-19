import React, { useCallback, useEffect, useState } from "react";
import { FiChevronDown } from 'react-icons/fi';
import api from "../../services/api";

import { Container, CardList, Card, ButtonMore, H1 } from './styles'

interface ResponseData {
  id: string;
  name: string;
  description: string; 
  thumbnail: {
    path: string;
    extension: string;
  };

}

function Characters() {

  const [characters, setCharacters] = useState<ResponseData[]>([])
  useEffect(()=>{
    api
    .get('/characters')
    .then(response =>  {
     setCharacters(response.data.data.results);
      })
    .catch(err => console.log(err));
  }, [])

  const handleMore = useCallback( async () => {
    try {
      const offset = characters.length;
      const response = await api.get('characters', {
        params: {
          offset,
        },
      });

      setCharacters([... characters, ... response.data.data.results]);
    } 
   catch(err) {
        console.log(err);
    }
  }, [characters]);

    return(
      
      <Container>
        <H1>Personagens da Marvel - Consumindo API da Marvel </H1>
        <CardList>
          {characters.map(character => {
                return (
                  <Card key={character.id} thumbnail={character.thumbnail}>
                    <div id="img"/>
                    <h2>{character.name}</h2>
                    <p>{character.description}</p>
                  </Card>
                 )
              })}
        </CardList>
        <ButtonMore onClick={handleMore}>
          <FiChevronDown size={20}/>
            Mais
          <FiChevronDown size={20}/>
        </ButtonMore>
      </Container>
    ) 
    
    
  };
  
  export default Characters;