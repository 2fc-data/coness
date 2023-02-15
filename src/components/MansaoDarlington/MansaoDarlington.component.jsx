import React from 'react'
import * as Styled from './MansaoDarlington.styles';

const MansaoDarlington = () => {

  return(
    <Styled.MansaoDarlington>
      <div className='hero'>
        <div className='boxText'>
          <div className='titulo'>MANSÃO DARLINGTON</div>
          <div className= 'descricao'></div>
        </div>

        <div className='boxImg'>
          <img src="./images/empreendimentos/md/frente.jpg" alt="" width='72%' height='72%' />
        </div>
      </div>


      <div className='inner-wrapper'>
        <div className='boxImg'>
          <img src="./images/empreendimentos/md/frente1.jpg" alt="" width='72%' height='72%' />
        </div>
        
        <div className='boxText'>
          <div className='subtitulo'>Tipologia 15.000 m2</div>
        </div>
      </div>



      <div className='inner-wrapper'>
        <div className='boxText'>
          <div className='subTitulo'>MAHWAH – New Jersey.</div>
        </div>
        
        <div className='boxImg'>
          <img src="./images/empreendimentos/md/frente.jpg" alt="" width='72%' height='72%' />
        </div>
      </div>


      <div className='inner-wrapper'>
        <div className='boxImg'>
          <img src="./images/empreendimentos/md/hall.jpg" alt="" width='72%' height='72%'/>
        </div>

        <div className='boxText'>
          <div className='subTitulo'>Paginação de interiores</div>
        </div>
      </div>



      <div className='inner-wrapper'>
        <div className='boxText'>
          <div className='subTitulo'>Acabamentos em madeira</div>
        </div>

        <div className='boxImg'>
          <img src="./images/empreendimentos/md/lareira.jpg" alt="" width='72%' height='72%' />
        </div>
      </div>




    </Styled.MansaoDarlington>
  )

}

export default MansaoDarlington;