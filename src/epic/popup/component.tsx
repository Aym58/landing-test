import { useState } from 'react';

import { TextElement } from 'common/text';
import { Box } from 'common/box';
import styled from 'styled-components';
import {
  MEDIA_BREAKPOINT,
  PaddingSizeData,
  PaddingSizeEnum,
  Spacing,
} from 'theme';

export const Component: React.FC<{ name?: string; text?: string }> = ({
  name,
  text,
}) => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <Container
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <TextElement type="bold" lineHeight underline>
        {name}
      </TextElement>
      &nbsp;
      {show && (
        <Popup>
          <Box background="white">{text}</Box>
        </Popup>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: inline;
  cursor: pointer;
`;

const Popup = styled.div`
  position: absolute;
  display: block;
  top: ${Spacing(6)};
  height: auto;
  overflow: hidden;
  z-index: 100;
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    margin-left: ${PaddingSizeData[PaddingSizeEnum.DEFAULT]};
    width: 287px;
  }

  @media (min-width: ${MEDIA_BREAKPOINT}) {
    left: 0;
    width: 400px;
  }
`;
