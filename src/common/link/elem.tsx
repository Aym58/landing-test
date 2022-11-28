import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

import {
  FontSizeType,
  FontWeightEnum,
  FontWeightData,
  FontWeightType,
  FontSizeEnum,
  FontSizeData,
  MEDIA_BREAKPOINT,
  Spacing,
} from 'theme/size';

import { ColorData, ColorEnum, ColorType } from 'theme';

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
}> = ({ to, children, color, type, size }) => {
  return (
    <Container to={to} color={color} size={size} type={type}>
      {children}
    </Container>
  );
};

const Container = styled(Link)<{
  to: string;
  size?: FontSizeType;
  color?: ColorType;
  type?: FontWeightType;
}>`
  margin: 0;
  font-family: 'PT Root UI';
  text-decoration: none;
  &:hover,
  &:focus {
    font-weight: ${FontWeightData[FontWeightEnum.BOLD]};
  }
  ${({
    size = FontSizeEnum.DEFAULT,
    color = ColorEnum.DEFAULT,
    type = FontWeightEnum.MEDIUM,
  }) => css`
    font-weight: ${FontWeightData[type]};
    color: ${ColorData[color]};
    @media (min-width: ${MEDIA_BREAKPOINT}) {
      font-size: ${(size === FontSizeEnum.DEFAULT && Spacing(4.5)) ||
      (size === FontSizeEnum.HEADER && Spacing(9)) ||
      (size === FontSizeEnum.HEADER_SECONDARY && Spacing(5)) ||
      (size === FontSizeEnum.BOOK && FontSizeData[FontSizeEnum.BOOK]) ||
      (size === FontSizeEnum.HEADER_TOP && Spacing(14))};
    }
    @media (max-width: ${MEDIA_BREAKPOINT}) {
      font-size: ${FontSizeData[size]};
    }
  `}
`;
