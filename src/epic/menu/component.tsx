import { isBrowser, isMobile } from 'react-device-detect';

import styled from 'styled-components';

import { ContentLayout } from 'common/content-layout';

export const Component: React.FC = () => {
  return (
    <ContentLayout>
      <Container>
        <Logo>
          <h1>Logo</h1>
        </Logo>
        <Menu>
          <h3>Регистрация</h3>
          <h3>Вход</h3>
        </Menu>
      </Container>
    </ContentLayout>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
`;

const Menu = styled.div`
  display: flex;
`;
