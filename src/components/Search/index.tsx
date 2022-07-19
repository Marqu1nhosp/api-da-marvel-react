import React, {useContext} from 'react';
import { Busca } from './styles';
import Swicth from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../services/api';

interface ResponseData {
  id: string;
  name: string;
  description: string; 
  thumbnail: {
    path: string;
    extension: string;
  };

}

function FiltroSearch(){
   
    const [search, setSearch] = useState('')
    

    console.log(search)

    useEffect(()=>{
     

    

      api
      .get('/searchCharacters')
      .then(response =>  {
        setSearch(response.data.data.results);
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
            <button id="btnBusca"><FiSearch>Buscar</FiSearch></button>   
      </Busca>
            
          
        
    )
  }

export default FiltroSearch;