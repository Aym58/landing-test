import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import {
  MEDIA_BREAKPOINT,
  ColorType,
  PositionEnum,
  PositionData,
  PositionType,
} from 'theme';

export const Elem: React.FC<{
  children?: ReactNode;
  background?: ColorType;
  align?: PositionType;
}> = ({ children, align }) => {
  return <Box align={align}>{children}</Box>;
};

const Box = styled.div<{
  align?: PositionType;
}>`
  width: 100%;
  ${({ align = PositionEnum.DEFAULT }) => css`
    @media (min-width: ${MEDIA_BREAKPOINT}) {
      text-align: ${PositionData[align]};
    }
    @media (max-width: ${MEDIA_BREAKPOINT}) {
      text-align: left;
    }
  `}
`;
