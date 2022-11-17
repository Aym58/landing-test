import React, { ReactNode } from 'react';

import styled from 'styled-components';

import { MAX_WIDTH } from 'theme';

export const Elem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  box-sizing: border-box;
`;
