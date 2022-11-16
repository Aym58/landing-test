import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

export const Elem: React.FC<{
  children?: ReactNode;
  isMobile?: boolean;
}> = ({ isMobile, children }) => {
  console.log(isMobile);
  return <Box isMobile={isMobile}>{children}</Box>;
};

const Box = styled.div<{
  isMobile?: boolean;
}>`
  ${({ isMobile = false }) => css`
    width: ${isMobile ? '100%' : '50%'};
  `}
`;
