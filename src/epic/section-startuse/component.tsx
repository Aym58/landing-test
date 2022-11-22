import { isMobile } from 'react-device-detect';

import { Content } from 'common/content-item';
import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';
import { Button } from 'common/button';

export const Component: React.FC = () => {
  return (
    <SectionLayout background="theme">
      <ContentLayout>
        <Content background="theme" align={isMobile ? 'left' : 'center'}>
          <Grid type="column">
            <h1>Logo</h1>
            <h1>Начать пользоватся</h1>
            <p>
              Набирай подписчиков и зарабатывай деньги в социальных сетях вместе
              с Fluvi
            </p>
            <p>Управляй блогом как бизнесом</p>
            <Button text="Попробовать бесплатно" />
          </Grid>
        </Content>
      </ContentLayout>
    </SectionLayout>
  );
};
