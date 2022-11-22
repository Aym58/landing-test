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
}> = ({ children, type, size }) => {
  return (
    <Grid type={type} size={size}>
      {children}
    </Grid>
  );
};

const Grid = styled.div<{
  type?: GridTypeType;
  size?: PaddingSizeType;
  spacing?: number;
}>`
  display: grid;
  align-items: start;
  justify-items: start;
  ${({
    size = PaddingSizeEnum.DEFAULT,
    type = GridTypeEnum.DEFAULT,
    spacing,
  }) => css`
    width: ${type === GridTypeEnum.ROW ? 'auto' : '100%'};
    grid-auto-flow: ${type === GridTypeEnum.ROW ? GridTypeData[type] : 'row'};

    grid-gap: ${spacing ? Spacing(spacing) : PaddingSizeData[size]};
    grid-template-columns: ${GridTypeData[type]};

    @media (max-width: ${MEDIA_BREAKPOINT}) {
      grid-template-columns: ${type === GridTypeEnum.ROW
        ? 'auto'
        : GridTypeData[GridTypeEnum.ONE_COL]};
    }
    @media (min-width: ${MEDIA_BREAKPOINT}) {
      grid-template-columns: ${type === GridTypeEnum.ROW
        ? 'auto'
        : GridTypeData[type]};
    }
  `}
`;
