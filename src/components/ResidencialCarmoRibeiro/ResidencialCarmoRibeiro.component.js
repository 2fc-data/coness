import React from 'react'
import * as Styled from './ResidencialCarmoRieiro.styles';

const ResidencialCarmoRibeiro = () => {

  return(
    <Styled.ResidencialCarmoRibeiro>
      <div className='hero'>
        <div className='boxText'>
          <div className='titulo'>Residencial Carmo & Ribeiro.</div>
          <div className= 'descricao'>
            <p>Localizado  bairro Jardim Vitória, Poços de Caldas - MG.</p>
            <p>Topologia: 8 unidades.</p>
          </div>
        </div>

        <div className='boxImg'>
          <img src="./images/empreendimentos/rcr/logoRCR.png" alt="" width='72%' height='72%' />
        </div>
        
      </div>

      <div className='inner-wrapper'>
        <div className='boxImg'>
          <img src="./images/empreendimentos/rcr/frente.jpg" alt="" width='72%' height='72%' />
        </div>
        
        <div className='boxText'>
          
        </div>
      </div>

    </Styled.ResidencialCarmoRibeiro>
  )

}

export default ResidencialCarmoRibeiro;
