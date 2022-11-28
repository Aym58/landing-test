import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

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
import { TextElement } from 'common/text';

export const Elem: React.FC<{
  to: string;
  tid?: string;
  tvalue?: object;
  color?: ColorType;
  type?: FontWeightType;
  size?: FontSizeType;
  children?: ReactNode;
  lineHeight?: boolean;
  underline?: boolean;
  oneLine?: boolean;
  className?: string;
}> = ({
  to,
  children,
  color,
  type,
  size,
  lineHeight,
  underline,
  className,
  oneLine,
}) => {
  return (
    <Container to={to}>
      <TextElement
        color={color}
        size={size}
        type={type}
        lineHeight={lineHeight}
        underline={underline}
        className={className}
        oneLine={oneLine}
      >
        {children}
      </TextElement>
    </Container>
  );
};

const Container = styled(Link)<{
  to: string;
}>`
  text-decoration: none;
  &:hover,
  &:focus {
    font-weight: ${FontWeightData[FontWeightEnum.BOLD]};
  }
`;
