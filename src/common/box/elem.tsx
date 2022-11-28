import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import {
  ColorData,
  ColorEnum,
  ColorType,
  PositionEnum,
  PositionData,
  PositionType,
  PaddingSizeType,
  PaddingSizeEnum,
  PaddingSizeData,
  Spacing,
} from 'theme';

export const Elem: React.FC<{
  children?: ReactNode;
  background?: ColorType;
  align?: PositionType;
  padding?: PaddingSizeType;
  border?: boolean;
  spacing?: number;
}> = ({ children, background, align, border, padding, spacing }) => {
  return (
    <Box
      background={background}
      align={align}
      border={border}
      padding={padding}
      spacing={spacing}
    >
      {children}
    </Box>
  );
};

const Box = styled.div<{
  background?: ColorType;
  borderColor?: ColorType;
  align?: PositionType;
  padding?: PaddingSizeType;
  border?: boolean;
  spacing?: number;
}>`
  width: 100%;
  height: 100%;
  ${({
    background = ColorEnum.MAIN_WHITE,
    align = PositionEnum.DEFAULT,
    padding = PaddingSizeEnum.DEFAULT,
    border = false,
    borderColor = ColorEnum.BORDER,
    spacing,
  }) =>
    css`
      border: ${border ? '1px solid' : 'none'};
      border-color: ${ColorData[borderColor]};
      border-radius: calc(${PaddingSizeData[padding]} / 2);
      padding: ${spacing ? Spacing(spacing) : PaddingSizeData[padding]};
      background-color: ${ColorData[background]};
      text-align: ${PositionData[align]};
    `};
`;
