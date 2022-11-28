import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import {
  MAX_WIDTH,
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
  color?: ColorType;
}> = ({ color }) => {
  return <Container color={color} />;
};

const Container = styled.div<{
  color?: ColorType;
}>`
  width: 100%;
  margin: 0;
  padding: 0;
  height: 1px;
  border: 1px solid;
  ${({ color = ColorEnum.BORDER }) =>
    css`
      border-color: ${ColorData[color]};
    `};
`;
