import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import {
  FontSizeEnum,
  FontSizeData,
  FontSizeType,
  FontWeightEnum,
  FontWeightData,
  FontWeightType,
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
  lineThrough?: boolean;
  oneLine?: boolean;
  className?: string;
}> = ({ children, color, type, size, lineHeight, lineThrough, className }) => {
  return (
    <Text
      color={color}
      size={size}
      type={type}
      lineHeight={lineHeight}
      lineThrough={lineThrough}
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
  lineThrough?: boolean;
  oneLine?: boolean;
}>`
  ${({
    size = FontSizeEnum.DEFAULT,
    color = ColorEnum.DEFAULT,
    type = FontWeightEnum.DEFAULT,
    lineHeight = false,
    lineThrough = false,
  }) => css`
    font-size: ${FontSizeData[size]};
    font-weight: ${FontWeightData[type]};
    color: ${ColorData[color]};
    text-decoration: ${lineThrough ? 'line-through' : 'none'};
    line-height: ${lineHeight ? '1.5em' : '1.1em'};
    display: ${lineHeight ? 'inline' : 'block'};
  `}
`;
