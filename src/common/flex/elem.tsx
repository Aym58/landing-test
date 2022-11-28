import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';
import { PositionEnum, PositionData, PositionType } from 'theme';

export const Elem: React.FC<{
  justify?: PositionType;
  align?: PositionType;
  children?: ReactNode;
}> = ({ children, justify, align }) => {
  return (
    <Container justify={justify} align={align}>
      {children}
    </Container>
  );
};

const Container = styled.div<{
  justify?: PositionType;
  align?: PositionType;
}>`
  display: flex;
  width: 100%;
  ${({ align = PositionEnum.CENTER, justify = PositionEnum.CENTER }) => css`
    align-items: ${PositionData[align]};
    justify-content: ${PositionData[justify]};
  `}
`;
