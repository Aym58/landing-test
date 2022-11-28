import styled from 'styled-components';

import { TextElement } from 'common/text';
import {
  ColorType,
  MEDIA_BREAKPOINT,
  PaddingSizeData,
  PaddingSizeEnum,
} from 'theme';

export const Component: React.FC<{
  color?: ColorType;
  header?: string;
  text?: string;
}> = ({ header, text, color = 'default' }) => {
  return (
    <Container>
      <TextElement size="header" color={color} type="bold">
        {header}
      </TextElement>
      <TextElement size="default" color={color} lineHeight>
        {text}
      </TextElement>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  align-items: start;
  justify-items: start;

  @media (max-width: ${MEDIA_BREAKPOINT}) {
    grid-gap: ${PaddingSizeData[PaddingSizeEnum.LIST]};
  }

  @media (min-width: ${MEDIA_BREAKPOINT}) {
    grid-gap: ${PaddingSizeData[PaddingSizeEnum.DEFAULT]};
  }
`;
