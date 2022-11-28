import styled from 'styled-components';

import { Content } from 'common/content-item';
import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';
import { Button } from 'common/button';
import { Logo } from 'common/logo';
import { TextElement } from 'common/text';

import { ColorEnum, ColorData, Spacing, MEDIA_BREAKPOINT } from 'theme';
import imgDesk from 'assets/images/background-startuse-desk.png';
import imgMob from 'assets/images/background-startuse-desk.png';

export const Component: React.FC = () => {
  return (
    <Container>
      <SectionLayout background="theme">
        <ContentLayout>
          <Grid type="column" size="content">
            <Content align="center">
              <Logo />
            </Content>

            <Content align="center">
              <TextElement size="header" type="bold" color="white">
                Начать пользоваться
              </TextElement>
            </Content>

            <Content align="center">
              <TextElement
                size="default"
                type="medium"
                color="white"
                lineHeight
              >
                Набирай подписчиков и зарабатывай деньги в социальных сетях
                вместе с Fluvi
              </TextElement>
            </Content>

            <Content align="center">
              <Button text="Попробовать бесплатно" color="theme" />
            </Content>
          </Grid>
        </ContentLayout>
      </SectionLayout>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  @media (min-width: ${MEDIA_BREAKPOINT}) {
    padding: ${Spacing(16)} 0;
    background: url(${imgDesk}),
      linear-gradient(
          120deg,
          ${ColorData[ColorEnum.THEME_GRADIENT_DARK]} 4%,
          ${ColorData[ColorEnum.THEME_GRADIENT_LIGHT]}
        )
        center;
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    padding: ${Spacing(8)} 0;
    background: url(${imgMob}),
      linear-gradient(
          120deg,
          ${ColorData[ColorEnum.THEME_GRADIENT_DARK]} 4%,
          ${ColorData[ColorEnum.THEME_GRADIENT_LIGHT]}
        )
        center;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
