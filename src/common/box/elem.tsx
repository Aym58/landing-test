import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import {
  ColorData,
  ColorEnum,
  ColorType,
  PositionEnum,
  PositionData,
  PositionType,
  FontSizeData,
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
}> = ({ children, background, align, border, padding }) => {
  return (
    <Box
      background={background}
      align={align}
      border={border}
      padding={padding}
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
}>`
  width: 100%;
  height: 100%;
  ${({
    background = ColorEnum.MAIN_WHITE,
    align = PositionEnum.DEFAULT,
    padding = PaddingSizeEnum.DEFAULT,
    border = false,
    borderColor = ColorEnum.BORDER,
  }) =>
    border &&
    css`
      border: 1px solid;
      border-color: ${ColorData[borderColor]};
      border-radius: calc(${PaddingSizeData[padding]} / 2);
      padding: ${PaddingSizeData[padding]};
      background-color: ${ColorData[background]};
      text-align: ${PositionData[align]};
    `};
`;
