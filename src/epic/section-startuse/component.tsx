import { isMobile } from 'react-device-detect';

import { ContentBox } from 'common/content-box';
import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';
import { IonButton } from '@ionic/react';

export const Component: React.FC = () => {
  return (
    <SectionLayout background="theme">
      <ContentLayout>
        <ContentBox background="theme" align={isMobile ? 'left' : 'center'}>
          {' '}
          <Grid type="one-column">
            <h1>Logo</h1>
            <h1>Начать пользоватся</h1>
            <p>
              Набирай подписчиков и зарабатывай деньги в социальных сетях вместе
              с Fluvi
            </p>
            <p>Управляй блогом как бизнесом</p>
            <IonButton>Попробовать бесплатно</IonButton>
          </Grid>
        </ContentBox>
      </ContentLayout>
    </SectionLayout>
  );
};
