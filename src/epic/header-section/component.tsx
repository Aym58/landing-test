import { isMobile } from 'react-device-detect';

import { Content } from 'common/content-item';
import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';
import { TextElement } from 'common/text';
import { Menu } from 'epic/menu';

export const Component: React.FC = () => {
  return (
    <SectionLayout background="theme">
      <Menu />
      <ContentLayout>
        <Grid type={isMobile ? 'column' : 'two-column'}>
          <Content background="theme">
            <TextElement size="default">
              Используй соцсети на максимум
            </TextElement>
            <p>Начти системно вести соцсети</p>
            <p>Вся работа с контентом в одном месте</p>
            <p>Управляй блогом как бизнесом</p>
          </Content>
        </Grid>
      </ContentLayout>
    </SectionLayout>
  );
};
