import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import {
  PaddingSizeData,
  PaddingSizeEnum,
  PaddingSizeType,
  Spacing,
} from 'theme';

export const Elem: React.FC<{
  size?: PaddingSizeType;
  children?: ReactNode;
  spacing?: number;
}> = ({ children, size }) => {
  return <Grid size={size}>{children}</Grid>;
};

const Grid = styled.div<{
  size?: PaddingSizeType;
  spacing?: number;
}>`
  display: grid;
  align-items: start;
  width: auto;
  grid-auto-flow: column;
  ${({ size = PaddingSizeEnum.ICON, spacing }) => css`
    grid-gap: ${spacing ? Spacing(spacing) : PaddingSizeData[size]};
  `}
`;
