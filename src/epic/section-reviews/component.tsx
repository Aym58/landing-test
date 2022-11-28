import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';
import { Paragraph } from 'epic/paragraph';
import { FeedbackBox } from 'epic/feedback-box';

import { ReactComponent as Youtube } from 'assets/icons/youtube-small.svg';
import { ReactComponent as Telegram } from 'assets/icons/telegram-small.svg';
import img from 'assets/images/star.png';
import styled from 'styled-components';
import { MEDIA_BREAKPOINT, Spacing } from 'theme';

export const Component: React.FC = () => {
  return (
    <Container>
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
                icon={<Youtube />}
                about="Маркетолог. Занимается траффиком"
                text="Приложение просто супер! Показал всей своей семье, им понравилось! Хотелось бы также уточнить, что я крутой. Я ненавижу Кирилла."
              />
              <FeedbackBox
                name="Олег Бердов"
                avatar="avatar_user_1.png"
                icon={<Telegram />}
                about="Инфлюенсер, музыкант и гений мира"
                text="Очень люблю Fluvi, также сильно как люблю
              Илью Зинченко! Советую скачать и опробовать
              лично! Я люблю помидоры."
              />
              <FeedbackBox
                name="Илья Зинченко"
                avatar="avatar_user_2.png"
                icon={<Youtube />}
                about="Маркетолог. Занимается траффиком, инфобизнесом"
                text="Приложение просто супер! Показал всей своей семье, им понравилось! Хотелось бы также уточнить, что я крутой. Я ненавижу Кирилла."
              />
              <FeedbackBox
                name="Олег Бердов"
                avatar="avatar_user_1.png"
                icon={<Telegram />}
                about="Инфлюенсер, музыкант и гений мира"
                text="Очень люблю Fluvi, также сильно как люблю
              Илью Зинченко! Советую скачать и опробовать
              лично! Я люблю помидоры."
              />
            </Grid>
          </ContentLayout>
        </Grid>
      </SectionLayout>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;

  @media (min-width: ${MEDIA_BREAKPOINT}) {
    padding: ${Spacing(8)} 0;
    background: url(${img});
    background-repeat: no-repeat;
    background-position: top right;
  }
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    padding: ${Spacing(6)} 0;
  }
`;
