
import React, {useContext} from 'react';
import { Busca } from './styles';
import Swicth from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../services/api';
import { CardList } from '../../pages/Characteres/styles';


interface ResponseData {
  id: string;
  name: string;
  description: string; 
  thumbnail: {
    path: string;
    extension: string;
  };

}

interface FilterSearchInterface {
  setCharacters: any
}

 function FiltroSearch({setCharacters}: FilterSearchInterface){
   
    const [search, setSearch] = useState('')
  
 useEffect(()=>{
      api
      .get(`/characters?nameStartsWith=${search}`)
      .then(response =>  {
         setCharacters(response.data.data.results);
        console.log(response.data.data.results)
        })
      .catch(err => console.log(err));
    }, [search])
    
      
    return(
      
    <Busca>
            <input 
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
            type="text" 
            id="txtBusca" 
            placeholder="Buscar..."/>
            
    </Busca> 
 
            
          
        
    )
  
    }
export default FiltroSearch; 