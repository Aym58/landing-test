export enum GridSizeEnum {
  LIST = 'list',
  DEFAULT = 'default',
  SECTION = 'section',
}

export enum GridTypeEnum {
  DEFAULT = 'default',
  ONE_COL = 'one-column',
  TWO_COL = 'two-column',
  THREE_COL = 'three-column',
}

export type GridSizeType = `${GridSizeEnum}`;

export type GridTypeType = `${GridTypeEnum}`;

export const GridSizeData = {
  [GridSizeEnum.LIST]: '14px',
  [GridSizeEnum.DEFAULT]: '18px',
  [GridSizeEnum.SECTION]: '32px',
};

export const GridTypeData = {
  [GridTypeEnum.DEFAULT]: 'auto',
  [GridTypeEnum.ONE_COL]: '1fr',
  [GridTypeEnum.TWO_COL]: '1fr 1fr',
  [GridTypeEnum.THREE_COL]: '1fr 1fr 1fr',
};
