import React, { ReactNode } from 'react';
import { IonContent } from '@ionic/react';

import styled from 'styled-components';

export const Elem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <IonContent>
      <Container>{children}</Container>
    </IonContent>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  flex-direction: column;
  flex-wrap: nowrap;
`;
