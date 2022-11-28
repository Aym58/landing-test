import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';
import { FeatureBox } from 'epic/feature-box';
import { Paragraph } from 'epic/paragraph';
import { MEDIA_BREAKPOINT, Spacing } from 'theme';

import img from 'assets/images/crown.png';
import styled from 'styled-components';

export const Component: React.FC = () => {
  return (
    <Container>
      <SectionLayout>
        <Grid type="column" size="content">
          <ContentLayout>
            <Grid type="two-column">
              <Paragraph
                header="Какой результат даёт Fluvi"
                text="Мы помогаем пользователям с двумя вещами: вести соцсети легче, вести соцсети эффективнее"
              />
            </Grid>
          </ContentLayout>
          <ContentLayout>
            <Grid type="two-column">
              <FeatureBox
                icon="⏰"
                header="Регулярность"
                text="Начнешь вести блог системно и не выпадать"
              />
              <FeatureBox
                icon="📊"
                header="Статистика"
                text="Сможешь увидеть продвинутую статистику блога"
              />
              <FeatureBox
                icon="💰"
                header="Рост дохода"
                text="Заработаешь больше и быстрее денег с блога"
              />
              <FeatureBox
                icon="🚀"
                header="Продвижение"
                text="Сможешь ежедневно привлекать подписчиков"
              />
              <FeatureBox
                icon="💼"
                header="Блог как бизнес"
                text="Будешь управлять всеми процессами блога"
              />
              <FeatureBox
                icon="🔥"
                header="Эффективность"
                text="Сможешь повышать все показатели блога"
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
    background-position: top 20px right -300px;
  }

  @media (min-width: 1100px) {
    padding: ${Spacing(8)} 0;
    background: url(${img});
    background-repeat: no-repeat;
    background-position: top 20px right -100px;
  }

  @media (min-width: 1350px) {
    padding: ${Spacing(8)} 0;
    background: url(${img});
    background-repeat: no-repeat;
    background-position: top 20px right;
  }

  @media (max-width: ${MEDIA_BREAKPOINT}) {
    padding: ${Spacing(6)} 0;
  }
`;
