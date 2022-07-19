import React, {useContext} from 'react';
import { Container } from './styles';
import Swicth from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../services/api';

interface Props {
    toggleTheme(): void;
}

interface ResponseData {
  id: string;
  name: string;
  description: string; 
  thumbnail: {
    path: string;
    extension: string;
  };

}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);


   
    return(
        <Container>
            
          <Swicth
          onChange={toggleTheme}
          checked={title == 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secundary}
          />
          
        </Container>
    );
};

export default Header;