import React from 'react';
import * as Styled from './Button.styles';

function Button({ children, onAction }) {
  return <Styled.Button onClick={onAction}>{children}</Styled.Button>
}

export default Button
