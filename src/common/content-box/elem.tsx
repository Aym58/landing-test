import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import {
  ColorData,
  ColorEnum,
  ColorType,
  PositionEnum,
  PositionData,
  PositionType,
} from 'theme';

export const Elem: React.FC<{
  children?: ReactNode;
  background?: ColorType;
  align?: PositionType;
}> = ({ children, background, align }) => {
  return (
    <Box background={background} align={align}>
      {children}
    </Box>
  );
};

const Box = styled.div<{
  background?: ColorType;
  align?: PositionType;
}>`
  width: 100%;
  ${({
    background = ColorEnum.MAIN_WHITE,
    align = PositionEnum.DEFAULT,
  }) => css`
    background-color: ${ColorData[background]};
    text-align: ${PositionData[align]};
  `}
`;
