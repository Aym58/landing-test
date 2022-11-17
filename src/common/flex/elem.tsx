import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';
import { PositionEnum, PositionData, PositionType } from 'theme';

export const Elem: React.FC<{
  justify?: PositionType;
  align?: PositionType;
  children?: ReactNode;
}> = ({ children, justify, align }) => {
  return (
    <Grid justify={justify} align={align}>
      {children}
    </Grid>
  );
};

const Grid = styled.div<{
  justify?: PositionType;
  align?: PositionType;
}>`
  display: flex;
  width: 100%;
  align-items: start;
  ${({ align = PositionEnum.CENTER, justify = PositionEnum.CENTER }) => css`
    align-items: ${PositionData[align]};
    justify-content: ${PositionData[justify]};
  `}
`;
