import styled from 'styled-components';

import { ReactComponent as MenuIcon } from 'assets/images/burger-menu.svg';

import { ContentLayout } from 'common/content-layout';
import { PaddingSizeEnum, PaddingSizeData } from 'theme';
import { TextElement } from 'common/text';
import { GridRow } from 'common/grid-row';
import { Logo } from 'common/logo';
import { SectionLayout } from 'common/section-layout';
import { Icon } from 'common/icon';
import { IconButton } from 'common/button-icon';
import { MEDIA_BREAKPOINT } from 'theme';

export const Component: React.FC = () => {
  return (
    <SectionLayout background="theme">
      <ContentLayout>
        <Container>
          <Logo />
          <GridRow size="default">
            <MenuContainer>
              <TextElement>Регистрация</TextElement>
            </MenuContainer>
            <MenuContainer>
              <TextElement>Вход</TextElement>
            </MenuContainer>
            <IconButton src={<MenuIcon />} />
          </GridRow>
        </Container>
      </ContentLayout>
    </SectionLayout>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const MenuContainer = styled.div`
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    display: none;
  }
`;
