import { Content } from 'common/content-item';
import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';
import { TextElement } from 'common/text';
import styled, { css } from 'styled-components';
import { Image } from 'common/image';

import smile_1 from 'assets/images/smile_1.png';
import smile_2 from 'assets/images/smile_2.png';

import {
  MEDIA_BREAKPOINT,
  PaddingSizeData,
  PaddingSizeEnum,
  Spacing,
  PositionType,
  PositionData,
  PositionEnum,
} from 'theme';

export const Component: React.FC = () => {
  return (
    <Container>
      <SectionLayout>
        <Grid type="column" size="content">
          <ContentLayout>
            <Content align="center">
              <TextElement size="header" type="bold">
                Как начать пользоваться Fluvi
              </TextElement>
            </Content>
          </ContentLayout>
          <ContentLayout>
            <GridContainer>
              <ImageMobile area="image">
                <Image img="steps-vertical.png" />
              </ImageMobile>

              <ImageDesk area="image">
                <Image img="steps-vertical-desk.png" height="100%" />
              </ImageDesk>

              <TextTemplate area="text_1">
                <TextElement type="medium" lineHeight>
                  Зарегистрироваться и добавить свой блог
                </TextElement>
              </TextTemplate>

              <ImageTemplate area="image_1">
                <Image img="01.png" />
              </ImageTemplate>

              <TextTemplate area="text_2">
                <TextElement type="medium" lineHeight>
                  Изучить базу знаний, как пользоваться функциями Fluvi
                </TextElement>
              </TextTemplate>

              <ImageTemplate area="image_2" justify="right">
                <Image img="02.png" />
              </ImageTemplate>

              <TextTemplate area="text_3">
                <TextElement type="medium" lineHeight>
                  Создать задачу, контент стратегию или план, записать идею,
                  редактировать текст и т.д.
                </TextElement>
              </TextTemplate>

              <ImageTemplate area="image_3">
                <Image img="03.png" />
              </ImageTemplate>

              <TextTemplate area="text_4">
                <TextElement type="medium" lineHeight>
                  Увидеть все процессы и показатели своего блога
                </TextElement>
              </TextTemplate>

              <ImageTemplate area="image_4" justify="right">
                <Image img="04.png" />
              </ImageTemplate>

              <TextTemplate area="text_5">
                <TextElement type="medium" lineHeight>
                  Каждый месяц улучшать результат с помощью наших инструментов
                </TextElement>
              </TextTemplate>

              <ImageTemplate area="image_5">
                <Image img="05.png" />
              </ImageTemplate>
            </GridContainer>
          </ContentLayout>
        </Grid>
      </SectionLayout>
    </Container>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-gap: ${PaddingSizeData[PaddingSizeEnum.DEFAULT]};
  @media (min-width: ${MEDIA_BREAKPOINT}) {
    grid-template-columns: 1fr ${Spacing(3)} 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'text_1 image image_1'
      'image_2 image text_2'
      'text_3 image image_3'
      'image_4 image text_4'
      'text_5 image image_5';
  }
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    grid-template-columns: ${Spacing(10)} 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'image text_1'
      'image text_2'
      'image text_3'
      'image text_4'
      'image text_5';
  }
`;

const TextTemplate = styled.div<{
  area: string;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (min-width: ${MEDIA_BREAKPOINT}) {
    min-height: ${Spacing(14)};
  }
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    min-height: ${Spacing(10)};
  }
  ${({ area }) =>
    css`
      grid-area: ${area};
    `};
`;

const ImageTemplate = styled.div<{
  area: string;
  justify?: PositionType;
}>`
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    display: none;
  }
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (min-width: ${MEDIA_BREAKPOINT}) {
    min-height: ${Spacing(14)};
  }

  ${({ area, justify = PositionEnum.DEFAULT }) =>
    css`
      grid-area: ${area};
      justify-content: ${PositionData[justify]};
    `};
`;

const ImageMobile = styled.div<{
  area: string;
}>`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  transform: translateY(${Spacing(8)});
  ${({ area }) =>
    css`
      grid-area: ${area};
    `};
  @media (min-width: ${MEDIA_BREAKPOINT}) {
    display: none;
  }
`;

const ImageDesk = styled.div<{
  area: string;
}>`
  width: 100%;
  height: 95%;
  margin: 0 auto;
  transform: translateY(${Spacing(14)});
  ${({ area }) =>
    css`
      grid-area: ${area};
    `};
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    display: none;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;

  @media (min-width: ${MEDIA_BREAKPOINT}) {
    padding: ${Spacing(8)} 0;
    background-image: url(${smile_1}), url(${smile_2});
    background-repeat: no-repeat;
    background-position: top 80% left 30%, top 20% right 20%;
  }
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    padding: ${Spacing(6)} 0;
  }
`;
