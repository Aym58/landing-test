import styled from 'styled-components';

import { ContentLayout } from 'common/content-layout';
import { Grid } from 'common/grid';
import { Button } from 'common/button';
import { Paragraph } from 'epic/paragraph';
import { Image } from 'common/image';

import {
  MEDIA_BREAKPOINT,
  ColorData,
  ColorEnum,
  ColorType,
  PaddingSizeEnum,
  PaddingSizeData,
  Spacing,
  MAX_WIDTH,
} from 'theme';

import backgroundDesk from 'assets/images/background-idea-desk.png';
import backgroundMob from 'assets/images/background-idea-mob.png';

export const Component: React.FC = () => {
  return (
    <Container>
      <ContentLayout>
        <BoxContainer>
          <ImageRocketContainer>
            <Image img="rocket.png" />
          </ImageRocketContainer>
          <Grid type="two-column">
            <Grid type="column" size="content">
              <Paragraph
                color="white"
                header="Главная идея Fluvi"
                text="Мы собираем в одном месте всех, кто профессионально работает с социальными сетями. Мы меняем подход к контент маркетингу и ведению социальных сетей. Мы делаем его понятным, удобным и эффективным"
              />
              <Button text="Попробовать бесплатно" color="theme" />
            </Grid>
            <ImageContainer>
              <Image img="analysis.png" />
            </ImageContainer>
          </Grid>
        </BoxContainer>
      </ContentLayout>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  @media (min-width: ${MEDIA_BREAKPOINT}) {
    padding-top: ${Spacing(46)};
    padding-left: ${Spacing(8)};
    padding-right: ${Spacing(8)};
  }
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    padding: ${Spacing(6)} 0;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  @media (min-width: ${MEDIA_BREAKPOINT}) {
    margin-bottom: -${Spacing(20)};
    bottom: -${Spacing(70)};
    margin-right: -${Spacing(20)};
    right: -${Spacing(20)};
    margin-top: -${Spacing(50)};
  }

  @media (max-width: ${MEDIA_BREAKPOINT}) {
    margin-right: -${Spacing(7)};
    right: -${Spacing(7)};
    margin-bottom: -${Spacing(10)};
    bottom: -${Spacing(10)};
  }
`;

const ImageRocketContainer = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  top: -80px;
  left: -80px;
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    display: none;
  }
`;

const BoxContainer = styled.div<{
  background?: ColorType;
}>`
  position: relative;
  display: flex;
  width: 100%;
  max-width: calc(
    ${MAX_WIDTH} + (2 * ${PaddingSizeData[PaddingSizeEnum.SECTION]})
  );
  margin: 0 auto;
  padding: ${PaddingSizeData.section};
  box-sizing: border-box;
  flex-direction: column;
  flex-wrap: nowrap;

  @media (min-width: ${MEDIA_BREAKPOINT}) {
    padding: ${Spacing(20)};
    border-radius: ${Spacing(5)};
    background: url(${backgroundDesk}),
      linear-gradient(
        160deg,
        ${ColorData[ColorEnum.THEME_GRADIENT_DARK]} 4%,
        ${ColorData[ColorEnum.THEME_GRADIENT_LIGHT]}
      );
    background-repeat: no-repeat;
    background-position: left bottom;
  }
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    padding-left: ${Spacing(6)};
    padding-right: ${Spacing(6)};
    padding-top: ${Spacing(10)};
    padding-bottom: ${Spacing(10)};
    background: url(${backgroundMob}),
      linear-gradient(
        110deg,
        ${ColorData[ColorEnum.THEME_GRADIENT_DARK]} 4%,
        ${ColorData[ColorEnum.THEME_GRADIENT_LIGHT]}
      );
    background-repeat: no-repeat;
    background-position: left top;
  }
`;
