import React from 'react'
import * as Styled from './ResidencialVittoriale.styles';

const ResidencialVittoriale = () => {

  return(
    <Styled.ResidencialVittoriale>
      <div className='inner-wrapper'>

        <div className='content'>
          <div className='titulo'>Residencial Vittoriale</div>
        </div>

        <div className='content'>
          <div className='boxText'>
            <div className= 'descricao'>
              Localização:  Bairro Jardim Vitória.<br/><br/> Rua: Senador Nilo Coelho. <br/><br/> Poços de Caldas - MG.
            </div>
          </div>

          <div className='boxImg'>
            <img src="./images/empreendimentos/rvt/vit_1.jpg" alt="" width="50%" height="50%"/>
          </div>          
        </div>

        <div className='content'>
          <div className='boxImg'>
            <img src="./images/empreendimentos/rvt/vit_2.jpg" alt="" />
          </div>
          
          <div className='boxImg'>
            <img src="./images/empreendimentos/rvt/vit_3.jpg" alt="" />
          </div>
        </div>

      </div>
    </Styled.ResidencialVittoriale>
  )

}

export default ResidencialVittoriale;

