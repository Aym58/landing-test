export const MAX_WIDTH = '1200px';

export const Spacing = (x: number): string => `${x * 2}px`;

export enum FontSizeEnum {
  SMALL = 'small',
  DEFAULT = 'default',
  LARGE = 'header',
}

export enum FontWeightEnum {
  DEFAULT = 'default',
  BOLD = 'bold',
}

export type FontSizeType = `${FontSizeEnum}`;

export type FontWeightType = `${FontWeightEnum}`;

export const FontSizeData = {
  [FontSizeEnum.SMALL]: '14px',
  [FontSizeEnum.DEFAULT]: '16px',
  [FontSizeEnum.LARGE]: '18px',
};

export const FontWeightData = {
  [FontWeightEnum.DEFAULT]: 'regular',
  [FontWeightEnum.BOLD]: 'bold',
};
