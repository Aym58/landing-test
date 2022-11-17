import { isMobile } from 'react-device-detect';

import { ContentBox } from 'common/content-box';
import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';

export const Component: React.FC = () => {
  return (
    <SectionLayout>
      <ContentLayout>
        <Grid type={isMobile ? 'one-column' : 'two-column'}>
          <ContentBox>
            <Grid type="one-column" size="list">
              <h1>Fluvi Roadmap</h1>
              <p>
                Мы помогаем пользователям с двумя вещами: вести соцсети легче,
                вести соцсети эффективнее
              </p>
            </Grid>
          </ContentBox>
        </Grid>
      </ContentLayout>
      <ContentLayout>
        <Grid type={isMobile ? 'one-column' : 'three-column'}>
          <Grid type="one-column" size="list">
            <h3>Альфа версия</h3>
            <p>Октябрь 2022</p>
            <ul>
              <li>Закрытый релиз приложения</li>
              <li>4-х уровневый планировщик контента</li>
              <li>Возможность работать с командой</li>
            </ul>
          </Grid>
          <Grid type="one-column" size="list">
            <h3>Бета версия</h3>
            <p>Декабрь 2022</p>
            <ul>
              <li>Ивент в честь запуска Fluvi</li>
              <li>50+ статей в базе знаний</li>
              <li>10+ показателей блога в аналитикt</li>
            </ul>
          </Grid>
          <Grid type="one-column" size="list">
            <h3>Релиз</h3>
            <p>Февраль 2023</p>
            <ul>
              <li>ИИ, который подбирает идеи для контента</li>
              <li>Функционал 20+ других приложений, ботов</li>
              <li>Автопостинг контента во все соцсети</li>
            </ul>
          </Grid>
        </Grid>
      </ContentLayout>
    </SectionLayout>
  );
};
