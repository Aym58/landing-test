export const MAX_WIDTH = '1200px';

export const MEDIA_BREAKPOINT = '768px';

export const Spacing = (x: number): string => `${x * 4}px`;

export enum FontSizeEnum {
  DEFAULT = 'default',
  DEFAULT_DESK = 'default-desk',
  HEADER = 'header',
  HEADER_DESK = 'header-mobile',
  HEADER_SECONDARY = 'header-secondary',
  HEADER_SECONDARY_DESK = 'header-secondary-desk',
  HEADER_TOP = 'header-top',
  HEADER_TOP_DESK = 'header-top-desk',
  BOOK = 'book',
}

export type FontSizeType = `${FontSizeEnum}`;

export const FontSizeData = {
  [FontSizeEnum.DEFAULT]: '14px',
  [FontSizeEnum.DEFAULT_DESK]: '18px',
  [FontSizeEnum.HEADER]: '20px',
  [FontSizeEnum.HEADER_DESK]: '36px',
  [FontSizeEnum.HEADER_SECONDARY]: '18px',
  [FontSizeEnum.HEADER_SECONDARY_DESK]: '24px',
  [FontSizeEnum.HEADER_TOP]: '32px',
  [FontSizeEnum.HEADER_TOP_DESK]: '54px',
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
  DEFAULT = 'default',
  BOLD = 'bold',
}

export type FontWeightType = `${FontWeightEnum}`;

export const FontWeightData = {
  [FontWeightEnum.DEFAULT]: 'regular',
  [FontWeightEnum.BOLD]: 'bold',
};
