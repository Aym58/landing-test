import styled from 'styled-components';

import { Content } from 'common/content-item';
import { ContentLayout } from 'common/content-layout';
import { SectionLayout } from 'common/section-layout';
import { Grid } from 'common/grid';
import { TextElement } from 'common/text';
import { Button } from 'common/button';
import { Image } from 'common/image';

export const Component: React.FC = () => {
  return (
    <SectionLayout background="theme">
      <ContentLayout>
        <Grid type="two-column">
          <Content background="theme">
            <Grid size="content">
              <TextElement size="header-top" type="bold" color="white">
                Используй соцсети на максимум
              </TextElement>
              <Grid size="list">
                <TextElement color="white">
                  • Начни вести системно соцсети
                </TextElement>
                <TextElement color="white">
                  • Вся работа с контентом в 1 месте
                </TextElement>
                <TextElement color="white">
                  • Управляй блогом как бизнесом
                </TextElement>
              </Grid>
              <Button text="Попробовать бесплатно" color="theme" />
            </Grid>
          </Content>
          <ImageContainer>
            <Image img="iPhone-desktop.png" />
          </ImageContainer>
        </Grid>
      </ContentLayout>
    </SectionLayout>
  );
};

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  margin-bottom: -32px;
  bottom: -32px;
`;
