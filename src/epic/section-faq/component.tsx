import { isMobile } from 'react-device-detect';

import { Content } from 'common/content-item';
import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';

export const Component: React.FC = () => {
  return (
    <SectionLayout>
      <Grid type="column">
        <ContentLayout>
          <Content align={isMobile ? 'left' : 'center'}>
            <h1>FAQ - частые вопросы</h1>
          </Content>
        </ContentLayout>
        <ContentLayout>
          <Grid type="column" size="list">
            <div>
              <h3>Сколько бесплатный период</h3>
              <p>
                Таким образом новая модель организационной деятельности играет
                важную роль в формировании системы обучения кадров,
                соответствует насущным потребностям. Задача организации, в
                особенности же постоянный количественный рост и сфера нашей
                активности обеспечивает широкому кругу {'(специалистов)'}
                участие в ормировании систем массового участия. Таким образом
                рамки и место обучения кадров позволяет оценить значение новых
                предложений. Идейные соображения высшего порядка, а также
                сложившаяся структура организации в значительной степени
                обуславливает создание форм развития.
              </p>
            </div>
            <div>Изучить базу знаний, как пользоваться функциями Fluvi</div>
            <div>
              <h3>
                Создать задачу, контент стратегию или план, записать идею,
                редактировать текст и т.д.
              </h3>
            </div>
            <div>
              <h3>Увидеть все процессы и показатели своего блога</h3>
            </div>
          </Grid>
        </ContentLayout>
      </Grid>
    </SectionLayout>
  );
};
