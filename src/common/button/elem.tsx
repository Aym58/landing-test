import React, { ReactNode } from 'react';

import styled from 'styled-components';

import { TextElement } from 'common/text';

import { FontSizeType, MEDIA_BREAKPOINT } from 'theme/size';

import { ColorEnum, ColorData, ColorType } from 'theme';
import { IonButton } from '@ionic/react';

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
}> = ({
  children,
  tid,
  text,
  color,
  textColor,
  icon,
  size,
  disabled,
  onClick,
  className,
  backgroundColor,
  fill,
}) => {
  const handleClick = (e: any) => {
    if (onClick) onClick(e);
  };
  return (
    <Button onClick={handleClick}>
      <TextElement color="theme" type="bold">
        {text}
      </TextElement>
    </Button>
  );
};

const Button = styled(IonButton)<{
  disabled?: boolean;
  customColor?: ColorType;
  size?: FontSizeType;
  icon?: boolean;
  fill?: boolean;
  textColor?: ColorType;
  backgroundColor?: ColorType;
}>`
  text-transform: none;
  --box-shadow: none;
  height: 42px;
  margin: 0;
  width: 100%;
  --border-radius: 10px;
  --background: ${ColorData[ColorEnum.MAIN_WHITE]};
  color: ${ColorData[ColorEnum.THEME]};

  @media (min-width: ${MEDIA_BREAKPOINT}) {
    width: 248px;
  }
  @media (max-width: ${MEDIA_BREAKPOINT}) {
    width: 100%;
  }
`;
