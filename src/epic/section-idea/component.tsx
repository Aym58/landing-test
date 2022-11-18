import { isMobile } from 'react-device-detect';

import { Content } from 'common/content-item';
import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';
import { IonButton } from '@ionic/react';

export const Component: React.FC = () => {
  if (isMobile) {
    return (
      <SectionLayout background="theme">
        <ContentLayout>
          <Grid type="column">
            <Grid type="column" size="list">
              <h1>Главная идея Fluvi</h1>
              <p>
                Мы собираем в 1м месте всех, кто профессионально работает с
                социальными сетями. Мы меняем подход к контент маркетингу и
                ведению социальных сетей. Мы делаем его понятным, удобным и
                эффективным.
              </p>
              <IonButton>Попробовать бесплатно</IonButton>
            </Grid>
          </Grid>
        </ContentLayout>
      </SectionLayout>
    );
  } else {
    return (
      <SectionLayout>
        <ContentLayout>
          <Content background="theme">
            <Grid type="two-column">
              <Grid type="column" size="list">
                <h1>Главная идея Fluvi</h1>
                <p>
                  Мы собираем в 1м месте всех, кто профессионально работает с
                  социальными сетями. Мы меняем подход к контент маркетингу и
                  ведению социальных сетей. Мы делаем его понятным, удобным и
                  эффективным.
                </p>
                <IonButton>Попробовать бесплатно</IonButton>
              </Grid>
            </Grid>
          </Content>
        </ContentLayout>
      </SectionLayout>
    );
  }
};
