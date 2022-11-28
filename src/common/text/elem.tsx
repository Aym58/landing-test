import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

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

export const Elem: React.FC<{
  tid?: string;
  tvalue?: object;
  color?: ColorType;
  type?: FontWeightType;
  size?: FontSizeType;
  children?: ReactNode;
  lineHeight?: boolean;
  underline?: boolean;
  oneLine?: boolean;
  inline?: boolean;
  className?: string;
}> = ({
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
    <Text
      color={color}
      size={size}
      type={type}
      lineHeight={lineHeight}
      underline={underline}
      className={className}
    >
      {children}
    </Text>
  );
};

const Text = styled.span<{
  size?: FontSizeType;
  color?: ColorType;
  type?: FontWeightType;
  lineHeight?: boolean;
  underline?: boolean;
  oneLine?: boolean;
}>`
  margin: 0;
  font-family: 'PT Root UI';

  ${({
    size = FontSizeEnum.DEFAULT,
    color = ColorEnum.DEFAULT,
    type = FontWeightEnum.REGULAR,
    lineHeight = false,
    underline = false,
    oneLine = false,
  }) => css`
    @media (min-width: ${MEDIA_BREAKPOINT}) {
      font-size: ${(size === FontSizeEnum.DEFAULT &&
        FontSizeData[FontSizeEnum.DEFAULT_DESK]) ||
      (size === FontSizeEnum.HEADER &&
        FontSizeData[FontSizeEnum.HEADER_DESK]) ||
      (size === FontSizeEnum.HEADER_SECONDARY &&
        FontSizeData[FontSizeEnum.HEADER_SECONDARY_DESK]) ||
      (size === FontSizeEnum.BOOK && FontSizeData[FontSizeEnum.BOOK]) ||
      (size === FontSizeEnum.HEADER_TOP &&
        FontSizeData[FontSizeEnum.HEADER_TOP_DESK])};
    }
    @media (max-width: ${MEDIA_BREAKPOINT}) {
      font-size: ${FontSizeData[size]};
    }
    font-weight: ${FontWeightData[type]};
    color: ${ColorData[color]};
    text-decoration: ${underline ? 'underline' : 'none'};
    line-height: ${lineHeight ? '1.5em' : '1.1em'};
    display: ${lineHeight ? 'inline' : 'block'};
    overflow: ${oneLine ? 'hidden' : 'visible'};
    text-overflow: ${oneLine ? 'ellipsis' : 'clip'};
    white-space: ${oneLine ? 'nowrap' : 'pre-line'};
    max-width: ${oneLine ? '220px' : '100%'};
  `}
`;
