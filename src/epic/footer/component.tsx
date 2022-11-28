import { isMobile } from 'react-device-detect';

import { Content } from 'common/content-item';
import { ContentLayout } from 'common/content-layout';

import { FooterLayout } from 'common/footer-layout';

import { Grid } from 'common/grid';
import { Flex } from 'common/flex';
import { Logo } from 'common/logo';
import { GridRow } from 'common/grid-row';
import { IconButton } from 'common/button-icon';

import { ReactComponent as Youtube } from 'assets/icons/youtube.svg';
import { ReactComponent as Twitter } from 'assets/icons/twitter.svg';
import { ReactComponent as Telegram } from 'assets/icons/telegram.svg';

import { Link } from 'common/link';
import styled from 'styled-components';

import {
  MEDIA_BREAKPOINT,
  PaddingSizeData,
  PaddingSizeEnum,
  PaddingSizeType,
  GridTypeEnum,
  GridTypeData,
  GridTypeType,
  Spacing,
  ColorEnum,
  ColorData,
} from 'theme';
import { TextElement } from 'common/text';
import { Divider } from 'common/divider';

export const Component: React.FC = () => {
  return (
    <Container>
      <FooterLayout background="background-secondary">
        <ContentLayout>
          <Grid size="content">
            <Flex justify="space-between">
              <Logo themed />
              <GridRow size="default">
                <IconButton src={<Youtube />} />
                <IconButton src={<Telegram />} />
                <IconButton src={<Twitter />} />
              </GridRow>
            </Flex>
            <Flex justify="space-between" align="end">
              <GridContainer>
                <Link to="#" color="default" type="medium">
                  Регистрация
                </Link>
                <Link to="#" color="default" type="medium">
                  Aвторизация
                </Link>
                <Link to="#" color="default" type="medium">
                  Terms Of Use
                </Link>
                <Link to="#" color="default" type="medium">
                  Privacy Policy
                </Link>
              </GridContainer>

              <Link to="#" color="default" type="medium">
                info@fluvi.net
              </Link>
            </Flex>
            <Divider />

            <TextElement color="secondary" lineHeight>
              Copyrights Fluvi 2022. All Rights Reserved. League of Legends,
              Valorant, Teamfight Tactics and other games are registered
              trademarks of Riot Games, Inc. Fluvi is in no way affiliated with,
              associated with or endorsed by Riot Games, Inc.
            </TextElement>
          </Grid>
        </ContentLayout>
      </FooterLayout>
    </Container>
  );
};

const GridContainer = styled.div`
  display: grid;
  align-items: start;
  justify-items: start;
  width: 'auto';
  grid-gap: ${PaddingSizeData[PaddingSizeEnum.CONTENT]};
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${MEDIA_BREAKPOINT}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${ColorData[ColorEnum.BACKGROUND_SECONDARY]};
  @media (min-width: ${MEDIA_BREAKPOINT}) {
    padding: ${Spacing(8)} 0;
  }
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    padding: ${Spacing(6)} 0;
  }
`;
