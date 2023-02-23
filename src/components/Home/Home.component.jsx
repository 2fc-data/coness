import React from 'react';
import Hero from '../Hero/Hero.component';
import Card from '../Card/Card.component';

import * as Styled from './Home.styles';

export const Home = () => {
  return (
    <Styled.Home>
      <Hero />  

      <div className='header'>Nossos empreendimentos</div>

      <div className='inner-wrapper'>
        <Card />
      </div>

    </Styled.Home>
  )
}
