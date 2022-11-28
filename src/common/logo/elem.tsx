import React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as LogoOrange } from 'assets/images/logo-orange.svg';

export const Elem: React.FC<{
  size?: number;
  themed?: boolean;
}> = ({ size = 10, themed = false }) => {
  return (
    <Container size={size}>
      {!themed && <Logo />}
      {themed && <LogoOrange />}
    </Container>
  );
};

const Container = styled.div<{
  size?: number;
}>`
  ${({ size }) =>
    css`
      width: ${size};
      height: ${size};
    `};
`;
