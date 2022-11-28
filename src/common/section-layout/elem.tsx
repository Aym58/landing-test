import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import {
  MEDIA_BREAKPOINT,
  ColorEnum,
  ColorData,
  ColorType,
  PaddingSizeData,
  PaddingSizeEnum,
} from 'theme';

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
  padding: ${PaddingSizeData.section};

  box-sizing: border-box;
  flex-direction: column;
  flex-wrap: nowrap;

  @media (min-width: ${MEDIA_BREAKPOINT}) {
    padding: ${PaddingSizeData[PaddingSizeEnum.SECTION]};
  }
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    padding-top: ${PaddingSizeData[PaddingSizeEnum.SECTION]};
    padding-bottom: ${PaddingSizeData[PaddingSizeEnum.SECTION]};
    padding-right: ${PaddingSizeData[PaddingSizeEnum.CONTENT]};
    padding-left: ${PaddingSizeData[PaddingSizeEnum.CONTENT]};
  }
  /*
  ${({ background = ColorEnum.MAIN_WHITE }) => css`
    background-color: ${ColorData[background]};
  `}*/
`;
