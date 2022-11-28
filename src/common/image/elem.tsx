import React from 'react';
import styled, { css } from 'styled-components';

export const Elem: React.FC<{
  img: string;
  size?: string;
  width?: string;
  height?: string;
}> = ({ width = 'auto', height = 'auto', img }) => {
  return (
    <Container width={width} height={height}>
      <img
        src={require(`assets/images/${img}`)}
        alt="iphone"
        width={width}
        height={height}
      />
    </Container>
  );
};

const Container = styled.div<{
  width?: string;
  height?: string;
}>`
  display: flex;
  margin: 0;
  padding: 0;
  ${({ width = 'auto', height = 'auto' }) =>
    css`
      width: ${width};
      height: ${height};
    `};
`;
