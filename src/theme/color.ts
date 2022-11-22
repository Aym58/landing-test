export enum ColorEnum {
  DEFAULT = 'default',
  MAIN_WHITE = 'white',
  SECONDARY = 'secondary',
  THEME = 'theme',
  BACKGROUND_SECONDARY = 'background-secondary',
  BORDER = 'border',
}

export type ColorType = `${ColorEnum}`;

export const ColorData = {
  [ColorEnum.DEFAULT]: '#363636',
  [ColorEnum.MAIN_WHITE]: '#FFFFFF',
  [ColorEnum.SECONDARY]: '#888888',
  [ColorEnum.THEME]: '#F46F17',
  [ColorEnum.BACKGROUND_SECONDARY]: '#F7F7F7',
  [ColorEnum.BORDER]: '#E6E6E6',
};
