import styled from 'styled-components';

import { ReactComponent as MenuIcon } from 'assets/images/burger-menu.svg';

import { ContentLayout } from 'common/content-layout';

import { GridRow } from 'common/grid-row';
import { Logo } from 'common/logo';
import { SectionLayout } from 'common/section-layout';

import { IconButton } from 'common/button-icon';
import { Link } from 'common/link';
import { MEDIA_BREAKPOINT } from 'theme';

export const Component: React.FC = () => {
  return (
    <SectionLayout background="theme">
      <ContentLayout>
        <Container>
          <Logo />
          <GridRow size="default">
            <MenuContainer>
              <Link to="#" color="white">
                Регистрация
              </Link>
            </MenuContainer>
            <MenuContainer>
              <Link to="#" color="white">
                Вход
              </Link>
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
