import { isMobile } from 'react-device-detect';

import { ContentBox } from 'common/content-box';
import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';

export const Component: React.FC = () => {
  return (
    <SectionLayout>
      <Grid type="one-column">
        <ContentLayout>
          <Grid type={isMobile ? 'one-column' : 'two-column'}>
            <ContentBox>
              <h1>Какой результат дает Fluvi</h1>
              <p>
                Мы помогаем пользователям с двумя вещами: вести соцсети легче,
                вести соцсети эффективнее
              </p>
            </ContentBox>
          </Grid>
        </ContentLayout>
        <ContentLayout>
          <Grid type={isMobile ? 'one-column' : 'two-column'}>
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
          </Grid>
        </ContentLayout>
      </Grid>
    </SectionLayout>
  );
};
