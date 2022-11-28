export const MAX_WIDTH = '1200px';
export const MAX_WIDTH_MOB = '640px';

export const MEDIA_BREAKPOINT = '897px';

export const Spacing = (x: number): string => `${x * 4}px`;

export enum FontSizeEnum {
  DEFAULT = 'default',
  HEADER = 'header',
  HEADER_SECONDARY = 'header-secondary',
  HEADER_TOP = 'header-top',
  BOOK = 'book',
}

export type FontSizeType = `${FontSizeEnum}`;

export const FontSizeData = {
  [FontSizeEnum.DEFAULT]: '14px',
  [FontSizeEnum.HEADER]: '20px',
  [FontSizeEnum.HEADER_SECONDARY]: '16px',
  [FontSizeEnum.HEADER_TOP]: '32px',
  [FontSizeEnum.BOOK]: '12px',
};

export enum PaddingSizeEnum {
  ICON = 'icon',
  LIST = 'list',
  DEFAULT = 'default',
  CONTENT = 'content',
  SECTION = 'section',
}

export type PaddingSizeType = `${PaddingSizeEnum}`;

export const PaddingSizeData = {
  [PaddingSizeEnum.ICON]: '8px',
  [PaddingSizeEnum.LIST]: '12px',
  [PaddingSizeEnum.DEFAULT]: '16px',
  [PaddingSizeEnum.CONTENT]: '24px',
  [PaddingSizeEnum.SECTION]: '32px',
};

export enum FontWeightEnum {
  REGULAR = 'regular',
  MEDIUM = 'medium',
  BOLD = 'bold',
}

export type FontWeightType = `${FontWeightEnum}`;

export const FontWeightData = {
  [FontWeightEnum.REGULAR]: 400,
  [FontWeightEnum.MEDIUM]: 500,
  [FontWeightEnum.BOLD]: 700,
};
