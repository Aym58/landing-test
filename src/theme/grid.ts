export enum GridTypeEnum {
  DEFAULT = 'default',
  ONE_COL = 'column',
  TWO_COL = 'two-column',
  THREE_COL = 'three-column',
  ROW = 'row',
}

export type GridTypeType = `${GridTypeEnum}`;

export const GridTypeData = {
  [GridTypeEnum.DEFAULT]: 'auto',
  [GridTypeEnum.ONE_COL]: '1fr',
  [GridTypeEnum.TWO_COL]: '1fr 1fr',
  [GridTypeEnum.THREE_COL]: '1fr 1fr 1fr',
  [GridTypeEnum.ROW]: 'column',
};
