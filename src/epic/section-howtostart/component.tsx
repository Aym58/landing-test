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
            <h1>Как начать пользоваться Fluvi</h1>
          </Content>
        </ContentLayout>
        <ContentLayout>
          {isMobile && (
            <Grid type={'column'}>
              <div>
                <p>Зарегистрироваться и добавить свой блог </p>
              </div>
              <div>
                <p>Изучить базу знаний, как пользоваться функциями Fluvi</p>
              </div>
              <div>
                <p>
                  Создать задачу, контент стратегию или план, записать идею,
                  редактировать текст и т.д.
                </p>
              </div>
              <div>
                <p>Увидеть все процессы и показатели своего блога</p>
              </div>
              <div>
                <p>
                  Каждый месяц улучшать результат с помощью наших инструментов
                </p>
              </div>
            </Grid>
          )}
          {!isMobile && (
            <Grid type={'two-column'}>
              <div>
                <p>Зарегистрироваться и добавить свой блог </p>
              </div>
              <div />
              <div />
              <div>
                <p>Изучить базу знаний, как пользоваться функциями Fluvi</p>
              </div>
              <div>
                <p>
                  Создать задачу, контент стратегию или план, записать идею,
                  редактировать текст и т.д.
                </p>
              </div>
              <div />
              <div />
              <div>
                <p>Увидеть все процессы и показатели своего блога</p>
              </div>
              <div>
                <p>
                  Каждый месяц улучшать результат с помощью наших инструментов
                </p>
              </div>
              <div />
            </Grid>
          )}
        </ContentLayout>
      </Grid>
    </SectionLayout>
  );
};
