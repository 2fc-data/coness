import React from 'react'

import * as Styled from '../Contato/Contato.styles';

const Contato = () => {
  return (
    <Styled.Contato>
      <div className='header'>Contato</div>
      <div className='inner-wrapper'>        
        <div className='map'>
          <a href='https://www.google.com/maps/place/Praça+Pedro+Sanches,+145+-+Centro,+Poços+de+Caldas+-+MG,+37701-004/@-21.7870639,-46.5699273,17z/data=!3m1!4b1!4m5!3m4!1s0x94c9dceec163fd17:0x86ed526ccaa5e900!8m2!3d-21.7870639!4d-46.5677386' target='_new'>
            <div className='map__over'>&nbsp;</div>
          </a>
        </div>         

        <div className='fones'>
          <h3>Nossos Contatos</h3>
          <h4>Vendas</h4>          
          <p>(35) 3722 3840</p>
          <p>(35) 9 9889 3840</p>
          <h4>Escritório</h4>
          <p>(35) 9 9987 2627</p>
        </div>
      </div>
    </Styled.Contato>
  )
}

export default Contato;
