import { isMobile } from 'react-device-detect';

import { Content } from 'common/content-item';
import { ContentLayout } from 'common/content-layout';

import { FooterLayout } from 'common/footer-layout';

import { Grid } from 'common/grid';
import { Flex } from 'common/flex';

export const Component: React.FC = () => {
  return (
    <FooterLayout background="background-secondary">
      <ContentLayout>
        <Grid>
          <Flex justify="space-between">
            <div>
              <h1>Logo</h1>
            </div>
            <Grid type="row">
              <div>
                <h3>icon</h3>
              </div>
              <div>
                <h3>icon</h3>
              </div>
              <div>
                <h3>icon</h3>
              </div>
            </Grid>
          </Flex>
          <Flex justify="space-between">
            <Grid type="row">
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
            </Grid>
            <div>
              <h3>info@fluvi.net</h3>
            </div>
          </Flex>
          <Content background="background-secondary">
            <p>
              Copyrights Fluvi 2022. All Rights Reserved. League of Legends,
              Valorant, Teamfight Tactics and other games are registered
              trademarks of Riot Games, Inc. Fluvi is in no way affiliated with,
              associated with or endorsed by Riot Games, Inc.
            </p>
          </Content>
        </Grid>
      </ContentLayout>
    </FooterLayout>
  );
};
