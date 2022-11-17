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
              <h1>Отзывы наших клиентов</h1>
              <p>
                Отзывы тех кто уже успел опробовать функционал приложения и дал
                свой фидбек!
              </p>
            </ContentBox>
          </Grid>
        </ContentLayout>
        <ContentLayout>
          <Grid type={isMobile ? 'one-column' : 'two-column'}>
            <div>
              <h3>Илья Зинченко</h3>
              <p>Маркетолог. Занимается траффиком, инфобизнесом</p>
              <p>
                Приложение просто супер! Показал всей своей семье, им
                понравилось! Хотелось бы также уточнить, что я крутой. Я
                ненавижу Кирилла.
              </p>
            </div>
            <div>
              <h3>Илья Зинченко</h3>
              <p>Маркетолог. Занимается траффиком, инфобизнесом</p>
              <p>
                Приложение просто супер! Показал всей своей семье, им
                понравилось! Хотелось бы также уточнить, что я крутой. Я
                ненавижу Кирилла.
              </p>
            </div>{' '}
            <div>
              <h3>Илья Зинченко</h3>
              <p>Маркетолог. Занимается траффиком, инфобизнесом</p>
              <p>
                Приложение просто супер! Показал всей своей семье, им
                понравилось! Хотелось бы также уточнить, что я крутой. Я
                ненавижу Кирилла.
              </p>
            </div>{' '}
            <div>
              <h3>Илья Зинченко</h3>
              <p>Маркетолог. Занимается траффиком, инфобизнесом</p>
              <p>
                Приложение просто супер! Показал всей своей семье, им
                понравилось! Хотелось бы также уточнить, что я крутой. Я
                ненавижу Кирилла.
              </p>
            </div>
          </Grid>
        </ContentLayout>
      </Grid>
    </SectionLayout>
  );
};
