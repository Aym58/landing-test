import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { IonButton } from '@ionic/react';

import { TextElement } from 'common/text';
import { FontSizeType, MEDIA_BREAKPOINT } from 'theme/size';
import { ColorEnum, ColorData, ColorType } from 'theme';

export const Elem: React.FC<{
  children?: ReactNode;
  tid?: string;
  text?: string;
  color?: ColorType;
  textColor?: ColorType;
  icon?: boolean;
  size?: FontSizeType;
  disabled?: boolean;
  onClick?: Function;
  className?: string;
  backgroundColor?: ColorType;
  fill?: boolean;
}> = ({ text, color, onClick, backgroundColor }) => {
  const handleClick = (e: any) => {
    if (onClick) onClick(e);
  };
  return (
    <Button onClick={handleClick} backgroundColor={backgroundColor}>
      <TextElement color={color} type="bold">
        {text}
      </TextElement>
    </Button>
  );
};

const Button = styled(IonButton)<{
  disabled?: boolean;
  textColor?: ColorType;
  backgroundColor?: ColorType;
}>`
  ${({ backgroundColor = ColorEnum.MAIN_WHITE }) => css`
  text-transform: none;
  --box-shadow: none;
  height: 42px;
  margin: 0;
  width: 100%;
  color: ${ColorData[ColorEnum.THEME]};
  --border-radius: 10px;
  --background: ${ColorData[backgroundColor]};
  --background-activated: ${ColorData[backgroundColor]};
  --background-focused: ${ColorData[backgroundColor]};
  --background-hover: ${ColorData[backgroundColor]};

  @media (min-width: ${MEDIA_BREAKPOINT}) {
    width: 248px;
  }
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    width: 100%;
    `}
`;
