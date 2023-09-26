import React from "react";
import * as Styled from './FooterBottom.styles';

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return(
    <Styled.FooterBottom>
    
      <div className='inner-wrapper'>
        <div className='navbarLink'>Todos os Direitos Reservados &#0174; 2021</div>          
      </div>

      <div className='inner-wrapper'>
        <div className='navbarLink'>creci: 41395</div>
      </div>

    </Styled.FooterBottom>
  )

}

export default FooterBottom;
// Copyright &#169;
// {currentYear}


// <div className='inner-wrapper'>
// <div className='navbarLink'>Políticas Privacidade</div>
// </div>

// <div className='inner-wrapper'>
//         <div className='navbarLink'>
//           <a href='https://www.2fc.dev.br' target='_new' className='nav__link'>by: 2fc.data</a>
//         </div>
//       </div>