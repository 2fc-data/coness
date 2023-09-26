import React from 'react';
import * as Styled from './Hamburguer.styles';

export const Hamburguer = () => {

  
  return (
    <Styled.Hamburguer>
      <div className='buttom-one' aria-conrols='primary-navigation' aria-expanded='false'>
        <svg fill= 'var(--button-color)' className='hamburguer' viewBox='0 0 100 100' width='250'>
          <rect className='line top' width='80' height='10' x='10' y='25' rx='6'></rect>
          <rect className='line middle' width='80' height='10' x='10' y='45' rx='6'></rect>
          <rect className='line bottom' width='80' height='10' x='10' y='65' rx='6'></rect>
        </svg>
    
      </div>

      <div className='buttom-two'>
      </div>

      <div className='buttom-three'>
      </div>
    </Styled.Hamburguer>
  )

}
