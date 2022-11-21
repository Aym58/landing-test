import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';
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
              avatar="avatar_user_2.png"
              icon="⏰"
              about="Маркетолог. Занимается траффиком"
              text="Приложение просто супер! Показал всей своей семье, им понравилось! Хотелось бы также уточнить, что я крутой. Я ненавижу Кирилла."
            />
            <FeedbackBox
              name="Олег Бердов"
              avatar="avatar_user_1.png"
              icon="⏰"
              about="Инфлюенсер, музыкант и гений мира"
              text="Очень люблю Fluvi, также сильно как люблю
              Илью Зинченко! Советую скачать и опробовать
              лично! Я люблю помидоры."
            />
            <FeedbackBox
              name="Илья Зинченко"
              avatar="avatar_user_2.png"
              icon="⏰"
              about="Маркетолог. Занимается траффиком, инфобизнесом"
              text="Приложение просто супер! Показал всей своей семье, им понравилось! Хотелось бы также уточнить, что я крутой. Я ненавижу Кирилла."
            />
            <FeedbackBox
              name="Олег Бердов"
              avatar="avatar_user_1.png"
              icon="⏰"
              about="Инфлюенсер, музыкант и гений мира"
              text="Очень люблю Fluvi, также сильно как люблю
              Илью Зинченко! Советую скачать и опробовать
              лично! Я люблю помидоры."
            />
          </Grid>
        </ContentLayout>
      </Grid>
    </SectionLayout>
  );
};
