import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { MAX_WIDTH, MAX_WIDTH_MOB, MEDIA_BREAKPOINT } from 'theme';

export const Elem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${MEDIA_BREAKPOINT}) {
    max-width: ${MAX_WIDTH_MOB};
  }
  @media (min-width: ${MEDIA_BREAKPOINT}) {
    max-width: ${MAX_WIDTH};
  }
  margin: 0 auto;
  box-sizing: border-box;
`;
