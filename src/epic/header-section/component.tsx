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
  background: radial-gradient(
      circle at top right,
      ${ColorData[ColorEnum.THEME_GRADIENT_LIGHT]},
      transparent 400px
    ),
    radial-gradient(
      400px 400px at left,
      ${ColorData[ColorEnum.THEME_GRADIENT_LIGHT]},
      transparent 400px
    ),
    radial-gradient(
      at bottom,
      ${ColorData[ColorEnum.THEME_GRADIENT_DARK]},
      transparent 500px
    ),
    ${ColorData[ColorEnum.THEME]};
`;

//   ${ColorData[ColorEnum.THEME]};
