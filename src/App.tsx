import React, { useState } from "react";
import Characters from "./pages/Characteres";
import GlobalStyle  from "./styles/global";
import Header from "./components/Header/index";
import FiltroSearch from "./components/Search/index";
import { ThemeProvider, DefaultTheme } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./hooks/usePersistedState";
import { useEffect } from "react";
import { useCallback } from "react";
import api from "./services/api";

interface ResponseData {
  id: string;
  name: string;
  description: string; 
  thumbnail: {
    path: string;
    extension: string;
  };

}


function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () =>{
    setTheme(theme.title === 'light' ? dark : light);
  };

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
   
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle/>
      <Header toggleTheme={toggleTheme}/>
      <FiltroSearch setCharacters={setCharacters}/> 
      </div>
     
    <>
     
    
    <Characters characters={characters} handleMore={handleMore}/>
    <GlobalStyle/>
    </>

    </ThemeProvider>
  );
   
  
};

export default App;
