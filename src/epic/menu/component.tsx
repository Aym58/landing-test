import styled from 'styled-components';

import { ContentLayout } from 'common/content-layout';
import { GridRow } from 'common/grid-row';
import { Logo } from 'common/logo';
import { SectionLayout } from 'common/section-layout';
import { IconButton } from 'common/button-icon';
import { LinkElement } from 'common/link';

import { MEDIA_BREAKPOINT } from 'theme';
import { ReactComponent as MenuIcon } from 'assets/images/burger-menu.svg';

export const Component: React.FC = () => {
  return (
    <SectionLayout background="theme">
      <ContentLayout>
        <Container>
          <Logo />
          <GridRow size="default">
            <MenuContainer>
              <LinkElement to="#" color="white">
                Регистрация
              </LinkElement>
            </MenuContainer>
            <MenuContainer>
              <LinkElement to="#" color="white">
                Вход
              </LinkElement>
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
