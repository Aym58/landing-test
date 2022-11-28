export enum PositionEnum {
  DEFAULT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  JUSTIFY = 'justify',
  SPACE_BETWEEN = 'space-between',
  FLEX_START = 'start',
  FLEX_END = 'end',
}

export type PositionType = `${PositionEnum}`;

export const PositionData = {
  [PositionEnum.DEFAULT]: 'left',
  [PositionEnum.CENTER]: 'center',
  [PositionEnum.RIGHT]: 'right',
  [PositionEnum.JUSTIFY]: 'justify',
  [PositionEnum.SPACE_BETWEEN]: 'space-between',
  [PositionEnum.FLEX_START]: 'flex-start',
  [PositionEnum.FLEX_END]: 'flex-end',
};
