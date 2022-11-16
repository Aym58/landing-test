import { isMobile } from 'react-device-detect';

import { ContentBox } from 'common/content-box';
import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { GridElement } from 'common/grid';

export const Component: React.FC = () => {
  return (
    <SectionLayout>
      <ContentLayout>
        <ContentBox isMobile={isMobile}>
          <h1>Какой результат дает Fluvi</h1>
          <p>
            Мы помогаем пользователям с двумя вещами: вести соцсети легче, вести
            соцсети эффективнее
          </p>
        </ContentBox>
      </ContentLayout>
      <ContentLayout>
        <GridElement list={isMobile}>
          <div>
            <p>Регулярность</p>
          </div>
          <div>
            <p>Рост дохода</p>
          </div>
          <div>
            <p>Блог как бизнес</p>
          </div>
          <div>
            <p>Статистика</p>
          </div>
          <div>
            <p>Продвижение</p>
          </div>
          <div>
            <p>Эффективность</p>
          </div>
        </GridElement>
      </ContentLayout>
    </SectionLayout>
  );
};
