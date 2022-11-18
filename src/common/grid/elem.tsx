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
} from 'theme';

export const Elem: React.FC<{
  type?: GridTypeType;
  size?: PaddingSizeType;
  children?: ReactNode;
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
}>`
  display: grid;
  align-items: start;
  justify-items: start;
  ${({ size = PaddingSizeEnum.DEFAULT, type = GridTypeEnum.DEFAULT }) => css`
    width: ${type === GridTypeEnum.ROW ? 'auto' : '100%'};
    grid-auto-flow: ${type === GridTypeEnum.ROW ? GridTypeData[type] : 'row'};
    grid-gap: ${PaddingSizeData[size]};
    grid-template-columns: ${GridTypeData[type]};

    @media (max-width: ${MEDIA_BREAKPOINT}) {
      grid-template-columns: ${GridTypeData[GridTypeEnum.ONE_COL]};
    }
    @media (min-width: ${MEDIA_BREAKPOINT}) {
      grid-template-columns: ${GridTypeData[type]};
    }
  `}
`;
