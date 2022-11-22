import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import { Spacing } from 'theme';

export const Elem: React.FC<{
  img: string;

  size?: number;
}> = ({ size, img }) => {
  return (
    <Container size={size}>
      <img src={require(`assets/images/${img}`)} alt="iphone" width="600px" />
    </Container>
  );
};

const Container = styled.div<{
  size?: number;
}>`
  border-radius: 50%;
  ${({ size }) =>
    css`
      width: ${size};
      height: ${size};
    `};
`;
