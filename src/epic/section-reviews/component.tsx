import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';
import { FeatureBox } from 'epic/feature-box';
import { Paragraph } from 'epic/paragraph';
import { FeedbackBox } from 'epic/feedback-box';

export const Component: React.FC = () => {
  return (
    <SectionLayout>
      <Grid type="column" size="content">
        <ContentLayout>
          <Grid type="two-column">
            <Paragraph
              header="Отзывы наших клиентов"
              text="Отзывы тех кто уже успел опробовать функционал 
              приложения и дал свой фидбек!"
            />
          </Grid>
        </ContentLayout>
        <ContentLayout>
          <Grid type="two-column">
            <FeedbackBox
              name="Илья Зинченко"
              icon="⏰"
              about="Маркетолог. Занимается траффиком, инфобизнесом"
              text="Приложение просто супер! Показал всей своей семье, им понравилось! Хотелось бы также уточнить, что я крутой. Я ненавижу Кирилла."
            />
            <FeedbackBox
              name="Илья Зинченко"
              icon="⏰"
              about="Маркетолог. Занимается траффиком, инфобизнесом"
              text="Приложение просто супер! Показал всей своей семье, им понравилось! Хотелось бы также уточнить, что я крутой. Я ненавижу Кирилла."
            />
            <FeedbackBox
              name="Илья Зинченко"
              icon="⏰"
              about="Маркетолог. Занимается траффиком, инфобизнесом"
              text="Приложение просто супер! Показал всей своей семье, им понравилось! Хотелось бы также уточнить, что я крутой. Я ненавижу Кирилла."
            />
            <FeedbackBox
              name="Илья Зинченко"
              icon="⏰"
              about="Маркетолог. Занимается траффиком, инфобизнесом"
              text="Приложение просто супер! Показал всей своей семье, им понравилось! Хотелось бы также уточнить, что я крутой. Я ненавижу Кирилла."
            />
          </Grid>
        </ContentLayout>
      </Grid>
    </SectionLayout>
  );
};
