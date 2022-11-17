import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';
import {
  GridSizeEnum,
  GridSizeData,
  GridSizeType,
  GridTypeEnum,
  GridTypeData,
  GridTypeType,
} from 'theme';

export const Elem: React.FC<{
  type?: GridTypeType;
  size?: GridSizeType;
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
  size?: GridSizeType;
}>`
  display: grid;
  width: 100%;
  align-items: start;
  ${({ size = GridSizeEnum.DEFAULT, type = GridTypeEnum.DEFAULT }) => css`
    grid-gap: ${GridSizeData[size]};
    grid-template-columns: ${GridTypeData[type]};
  `}
`;
