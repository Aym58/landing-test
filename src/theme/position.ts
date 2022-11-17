export enum PositionEnum {
  DEFAULT = 'default',
  CENTER = 'center',
  RIGHT = 'left',
  JUSTIFY = 'justify',
}

export type PositionType = `${PositionEnum}`;

export const PositionData = {
  [PositionEnum.DEFAULT]: 'left',
  [PositionEnum.CENTER]: 'center',
  [PositionEnum.RIGHT]: 'right',
  [PositionEnum.JUSTIFY]: 'justify',
};
