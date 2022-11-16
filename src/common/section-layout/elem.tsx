import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import { Spacing, ColorEnum, ColorData, ColorType } from 'theme';

export const Elem: React.FC<{
  children: ReactNode;
  background?: ColorType;
}> = ({ children, background }) => {
  return <Container background={background}>{children}</Container>;
};

const Container = styled.div<{
  background?: ColorType;
}>`
  display: flex;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  min-height: 100px;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: ${Spacing(4)} ${Spacing(15)};
  ${({ background = ColorEnum.MAIN_WHITE }) => css`
    background-color: ${ColorData[background]};
  `}
`;
