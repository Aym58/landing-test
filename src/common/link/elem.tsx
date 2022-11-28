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

  color?: ColorType;
  hoverColor?: ColorType;
  type?: FontWeightType;
  size?: FontSizeType;
  children?: ReactNode;
}> = ({ to, children, color, type, size, hoverColor }) => {
  return (
    <Container
      to={to}
      color={color}
      size={size}
      type={type}
      hoverColor={hoverColor}
    >
      {children}
    </Container>
  );
};

const Container = styled(Link)<{
  to: string;
  size?: FontSizeType;
  color?: ColorType;
  type?: FontWeightType;
  hoverColor?: ColorType;
}>`
  margin: 0;
  font-family: 'PT Root UI';
  text-decoration: none;
  ${({
    size = FontSizeEnum.DEFAULT,
    color = ColorEnum.DEFAULT,
    hoverColor,
    type = FontWeightEnum.MEDIUM,
  }) => css`
    font-weight: ${FontWeightData[type]};
    color: ${ColorData[color]};
    &:hover,
    &:focus {
      font-weight: ${FontWeightData[FontWeightEnum.BOLD]};
      color: ${hoverColor ? ColorData[hoverColor] : ColorData[color]};
    }
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
