import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import {
  MEDIA_BREAKPOINT,
  PaddingSizeData,
  PaddingSizeEnum,
  PaddingSizeType,
  GridTypeEnum,
  GridTypeData,
  GridTypeType,
  Spacing,
} from 'theme';

export const Elem: React.FC<{
  type?: GridTypeType;
  size?: PaddingSizeType;
  children?: ReactNode;
  spacing?: number;
  noStretch?: boolean;
}> = ({ children, type, size, noStretch }) => {
  return (
    <Grid type={type} size={size} noStretch={noStretch}>
      {children}
    </Grid>
  );
};

const Grid = styled.div<{
  type?: GridTypeType;
  size?: PaddingSizeType;
  spacing?: number;
  noStretch?: boolean;
}>`
  display: grid;
  align-items: start;
  justify-items: start;
  ${({
    size = PaddingSizeEnum.DEFAULT,
    type = GridTypeEnum.DEFAULT,
    noStretch = false,
    spacing,
  }) => css`
    width: ${noStretch ? 'auto' : '100%'};
    grid-auto-flow: 'row';

    grid-gap: ${spacing ? Spacing(spacing) : PaddingSizeData[size]};

    grid-template-columns: ${GridTypeData[type]};

    @media (max-width: ${MEDIA_BREAKPOINT}) {
      grid-template-columns: ${GridTypeData[GridTypeEnum.ONE_COL]};
    }
    @media (min-width: ${MEDIA_BREAKPOINT}) {
      grid-template-columns: ${GridTypeData[type]};
    }
  `}
`;
