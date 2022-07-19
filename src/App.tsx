import React from "react";
import Characters from "./pages/Characteres";
import GlobalStyle  from "./styles/global";
import Header from "./components/Header/index";
import FiltroSearch from "./components/Search/index"
import { ThemeProvider, DefaultTheme } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./hooks/usePersistedState";

function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () =>{
    setTheme(theme.title === 'light' ? dark : light);
  };

  return(
   
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle/>
      <Header toggleTheme={toggleTheme}/>
      <FiltroSearch/>
      </div>
     
    <>
     
    
    <Characters/>
    <GlobalStyle/>
    </>

    </ThemeProvider>
  );
   
  
};

export default App;
