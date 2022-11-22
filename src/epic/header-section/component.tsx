import styled, { css } from 'styled-components';

import { Menu } from 'epic/menu';
import { SectionTop } from 'epic/section-top';

import { ColorEnum, ColorData } from 'theme';

export const Component: React.FC = () => {
  return (
    <Container>
      <Menu />
      <SectionTop />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: ${ColorData[ColorEnum.THEME]};
`;
