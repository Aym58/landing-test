import { isMobile } from 'react-device-detect';

import { ContentBox } from 'common/content-box';
import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';

import { Menu } from 'epic/menu';

export const Component: React.FC = () => {
  return (
    <SectionLayout background="theme">
      <Menu />
      <ContentLayout>
        <ContentBox isMobile={isMobile}>
          <h1>Используй соцсети на максимум</h1>
          <p>Начти системно вести соцсети</p>
          <p>Вся работа с контентом в одном месте</p>
          <p>Управляй блогом как бизнесом</p>
        </ContentBox>
      </ContentLayout>
    </SectionLayout>
  );
};
