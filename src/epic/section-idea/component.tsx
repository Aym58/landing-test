import { isMobile } from 'react-device-detect';

import { Content } from 'common/content-item';
import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';
import { IonButton } from '@ionic/react';
import styled, { css } from 'styled-components';
import { Button } from 'common/button';
import { Paragraph } from 'epic/paragraph';
import { Box } from 'common/box';

import {
  MEDIA_BREAKPOINT,
  ColorData,
  ColorEnum,
  ColorType,
  PositionEnum,
  PositionData,
  PositionType,
  FontSizeData,
  PaddingSizeType,
  PaddingSizeEnum,
  PaddingSizeData,
  Spacing,
} from 'theme';

export const Component: React.FC = () => {
  return (
    <Container>
      <Box background="theme" padding="section">
        <Grid type="two-column">
          <Grid type="column" size="content">
            <Paragraph
              color="white"
              header="Главная идея Fluvi"
              text="Мы собираем в одном месте всех, кто профессионально работает с социальными сетями. Мы меняем подход к контент маркетингу и ведению социальных сетей. Мы делаем его понятным, удобным и эффективным"
            />
            <Button text="Попробовать бесплатно" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

const Container = styled.div<{
  background?: ColorType;
}>`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: ${PaddingSizeData.section};
  box-sizing: border-box;
  flex-direction: column;
  flex-wrap: nowrap;

  ${({ background = ColorEnum.MAIN_WHITE }) => css`
    background-color: ${ColorData[background]};
    @media (min-width: ${MEDIA_BREAKPOINT}) {
      background-color: ${ColorData[ColorEnum.MAIN_WHITE]};
      padding: ${PaddingSizeData[PaddingSizeEnum.SECTION]};
    }
    @media (max-width: ${MEDIA_BREAKPOINT}) {
      background-color: ${ColorData[ColorEnum.THEME]};
      padding: 0;
    }
  `}
`;
