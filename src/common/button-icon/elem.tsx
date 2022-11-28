import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { FontSizeType } from 'theme/size';
import { ColorType } from 'theme';
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
