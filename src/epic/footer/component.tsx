import { isMobile } from 'react-device-detect';

import { ContentBox } from 'common/content-box';
import { ContentLayout } from 'common/content-layout';

import { FooterLayout } from 'common/footer-layout';

import { Grid } from 'common/grid';
import { Flex } from 'common/flex';
import { GridItems } from 'common/grid-items';

export const Component: React.FC = () => {
  return (
    <FooterLayout background="background-secondary">
      <ContentLayout>
        <Grid type="one-column">
          <Flex justify="space-between">
            <div>
              <h1>Logo</h1>
            </div>
            <GridItems>
              <div>
                <h3>icon</h3>
              </div>
              <div>
                <h3>icon</h3>
              </div>
              <div>
                <h3>icon</h3>
              </div>
            </GridItems>
          </Flex>
          <Flex justify="space-between">
            <GridItems>
              <div>
                <h3>Регистрация</h3>
              </div>
              <div>
                <h3>Авторизация</h3>
              </div>
              <div>
                <h3>Terms Of Use</h3>
              </div>
              <div>
                <h3>Privacy Policy</h3>
              </div>
            </GridItems>
            <div>
              <h3>info@fluvi.net</h3>
            </div>
          </Flex>
          <ContentBox background="background-secondary">
            <p>
              Copyrights Fluvi 2022. All Rights Reserved. League of Legends,
              Valorant, Teamfight Tactics and other games are registered
              trademarks of Riot Games, Inc. Fluvi is in no way affiliated with,
              associated with or endorsed by Riot Games, Inc.
            </p>
          </ContentBox>
        </Grid>
      </ContentLayout>
    </FooterLayout>
  );
};
