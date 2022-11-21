export const MAX_WIDTH = '1200px';

export const MEDIA_BREAKPOINT = '768px';

export const Spacing = (x: number): string => `${x * 4}px`;

export enum FontSizeEnum {
  DEFAULT = 'default',
  DEFAULT_MOB = 'default-mobile',
  HEADER = 'header',
  HEADER_MOB = 'header-mobile',
  HEADER_SECONDARY = 'header-secondary',
  HEADER_SECONDARY_MOB = 'header-secondary-mobile',
  BOOK = 'book',
}

export type FontSizeType = `${FontSizeEnum}`;

export const FontSizeData = {
  [FontSizeEnum.DEFAULT]: '18px',
  [FontSizeEnum.DEFAULT_MOB]: '14px',
  [FontSizeEnum.HEADER]: '36px',
  [FontSizeEnum.HEADER_MOB]: '20px',
  [FontSizeEnum.HEADER_SECONDARY]: '24px',
  [FontSizeEnum.HEADER_SECONDARY_MOB]: '18px',
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
