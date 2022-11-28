import React from 'react';

import styled, { css } from 'styled-components';

import { Spacing } from 'theme';

export const Elem: React.FC<{
  img: string;

  size?: number;
}> = ({ size = 10, img }) => {
  return (
    <Container size={size}>
      <img
        src={require(`assets/users/${img}`)}
        alt="avatar"
        width={Spacing(size)}
      />
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
