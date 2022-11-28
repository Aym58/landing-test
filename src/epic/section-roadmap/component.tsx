import styled, { css } from 'styled-components';

import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';
import { TextElement } from 'common/text';
import { Image } from 'common/image';

import {
  MEDIA_BREAKPOINT,
  PaddingSizeData,
  PaddingSizeEnum,
  Spacing,
} from 'theme';

import { Popup } from 'epic/popup';

import bottle from 'assets/images/bottle.png';

export const Component: React.FC = () => {
  return (
    <Container>
      <SectionLayout>
        <Grid type="column" size="content">
          <ContentLayout>
            <Grid type="two-column">
              <ParagraphContainer>
                <TextElement size="header" type="bold">
                  Fluvi Roadmap
                </TextElement>
                <TextElement lineHeight>
                  Каждый месяц мы планируем улучшать продукт и добавлять новые
                  функции. К началу 2023 мы превратим Fluvi в&nbsp;
                  <Popup
                    name="Super App*"
                    text="* Приложение 10 в 1. Суть идеи «Super App» - решение всех задач в одном месте. Теперь планировать, создавать, редактировать и анализировать контент можно в одном месте. Это Super App Fluvi."
                  />
                  с широким функционалом.
                </TextElement>
              </ParagraphContainer>
            </Grid>
          </ContentLayout>

          <ContentLayout>
            <GridContainer>
              <ImageDesk>
                <Image img="steps-horizontal-desk.png" width="100%" />
              </ImageDesk>

              <ImageMob>
                <Image img="steps-vertical-mob.png" height="100%" />
              </ImageMob>

              <TextTemplate area="block_1">
                <Grid type="column" size="list">
                  <TextElement size="header-secondary" type="bold">
                    Альфа версия
                  </TextElement>
                  <TextElement color="secondary">Октябрь 2022</TextElement>
                  <TextElement>• Закрытый релиз приложения</TextElement>
                  <TextElement>
                    • 4-х уровневый планировщик контента
                  </TextElement>
                  <TextElement>• Возможность работать с командой</TextElement>
                </Grid>
              </TextTemplate>

              <TextTemplate area="block_2">
                <Grid type="column" size="list">
                  <TextElement size="header-secondary" type="bold">
                    Бета версия
                  </TextElement>
                  <TextElement color="secondary">Декабрь 2022</TextElement>
                  <TextElement>• Ивент в честь запуска Fluvi</TextElement>
                  <TextElement>• 50+ статей в базе знаний</TextElement>
                  <TextElement>• 10+ показателей блога в аналитике</TextElement>
                </Grid>
              </TextTemplate>

              <TextTemplate area="block_3">
                <Grid type="column" size="list">
                  <TextElement size="header-secondary" type="bold">
                    Релиз
                  </TextElement>
                  <TextElement color="secondary">Февраль 2023</TextElement>
                  <TextElement>
                    • ИИ, который подбирает идеи для контента
                  </TextElement>
                  <TextElement>
                    • Функционал 20+ других приложений, ботов
                  </TextElement>
                  <TextElement>
                    • Автопостинг контента во все соцсети
                  </TextElement>
                </Grid>
              </TextTemplate>
            </GridContainer>
          </ContentLayout>
        </Grid>
      </SectionLayout>
    </Container>
  );
};

const ParagraphContainer = styled.div`
  display: grid;
  align-items: start;
  justify-items: start;

  @media (max-width: ${MEDIA_BREAKPOINT}) {
    grid-gap: ${PaddingSizeData[PaddingSizeEnum.LIST]};
  }

  @media (min-width: ${MEDIA_BREAKPOINT}) {
    grid-gap: ${PaddingSizeData[PaddingSizeEnum.DEFAULT]};
  }
`;

const GridContainer = styled.div`
  display: grid;
  row-gap: ${PaddingSizeData[PaddingSizeEnum.CONTENT]};
  column-gap: ${PaddingSizeData[PaddingSizeEnum.DEFAULT]};

  @media (min-width: ${MEDIA_BREAKPOINT}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 14px 1fr;
    grid-template-areas:
      'image_desk image_desk image_desk'
      'block_1 block_2 block_3';
  }
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    grid-template-columns: 14px 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'image_mob block_1'
      'image_mob block_2'
      'image_mob block_3';
  }
`;

const TextTemplate = styled.div<{
  area: string;
}>`
  width: 100%;
  height: 100%;
  ${({ area }) =>
    css`
      grid-area: ${area};
    `};
`;

const ImageDesk = styled.div`
  width: 100%;
  height: 14px;
  grid-area: image_desk;
  margin: 0 auto;
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    display: none;
  }
`;

const ImageMob = styled.div`
  position: absolute;
  grid-area: image_mob;
  width: 12px;
  height: 56%;
  margin: 0 auto;

  @media (min-width: ${MEDIA_BREAKPOINT}) {
    display: none;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  @media (min-width: ${MEDIA_BREAKPOINT}) {
    padding: ${Spacing(8)} 0;
    background-image: url(${bottle});
    background-repeat: no-repeat;
    background-position: top 40% right;
  }
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    padding: ${Spacing(6)} 0;
  }
`;
