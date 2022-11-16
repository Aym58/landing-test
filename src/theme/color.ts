export enum ColorEnum {
  DEFAULT = 'default',
  MAIN_WHITE = 'white',
  SECONDARY = 'secondary',
  THEME = 'theme',
}

export type ColorType = `${ColorEnum}`;

export const ColorData = {
  [ColorEnum.DEFAULT]: '#363636',
  [ColorEnum.MAIN_WHITE]: '#FFFFFF',
  [ColorEnum.SECONDARY]: '#888888',
  [ColorEnum.THEME]: '#F46F17',
};
