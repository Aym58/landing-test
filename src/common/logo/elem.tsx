import { ReactComponent as Logo } from 'assets/images/logo.svg';

import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import { Spacing } from 'theme';

export const Elem: React.FC<{
  size?: number;
}> = ({ size = 10 }) => {
  return (
    <Container size={size}>
      <Logo />
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
