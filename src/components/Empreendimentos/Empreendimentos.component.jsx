import React from 'react';
import Card from '../Card/Card.component';

import * as Styled from './Empreendimentos.styles.js';

const Empreendimentos = () => {

  return(
    <Styled.Empreendimentos>
      <div className='header'>Empreendimentos</div>

      <Card />
  
      <div className='inner-wrapper'>
        
      </div>
      
    </Styled.Empreendimentos>
  )

}

export default Empreendimentos;
