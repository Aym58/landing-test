import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import { TextElement } from 'common/text';

import {
  FontSizeEnum,
  FontSizeData,
  FontSizeType,
  FontWeightEnum,
  FontWeightData,
  FontWeightType,
  MEDIA_BREAKPOINT,
} from 'theme/size';

import { ColorEnum, ColorData, ColorType } from 'theme';
import { IonButton } from '@ionic/react';

import { Icon } from 'common/icon';

export const Elem: React.FC<{
  src: ReactNode;
  onClick?: Function;
}> = ({ src, onClick }) => {
  const handleClick = (e: any) => {
    if (onClick) onClick(e);
  };
  return (
    <Button onClick={handleClick}>
      <Icon src={src} />
    </Button>
  );
};

const Button = styled.button<{
  disabled?: boolean;
  customColor?: ColorType;
  size?: FontSizeType;
  icon?: boolean;
  fill?: boolean;
  textColor?: ColorType;
  backgroundColor?: ColorType;
}>`
  align-self: center;

  transition: none;
  border: none;
  background: none;
  --box-shadow: none;
  padding: 0;
  margin: 0;
  height: auto;
  width: auto;
`;
