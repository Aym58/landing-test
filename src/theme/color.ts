export enum ColorEnum {
  DEFAULT = 'default',
  MAIN_WHITE = 'white',
  SECONDARY = 'secondary',
  THEME = 'theme',
  BACKGROUND_SECONDARY = 'background-secondary',
  BORDER = 'border',
  THEME_GRADIENT_DARK = 'theme-gradient-dark',
  THEME_GRADIENT_LIGHT = 'theme-gradient-light',
}

export type ColorType = `${ColorEnum}`;
//#f12c11 4%, #f59019
export const ColorData = {
  [ColorEnum.DEFAULT]: '#363636',
  [ColorEnum.MAIN_WHITE]: '#FFFFFF',
  [ColorEnum.SECONDARY]: '#888888',
  [ColorEnum.THEME]: '#F46F17',
  [ColorEnum.BACKGROUND_SECONDARY]: '#F7F7F7',
  [ColorEnum.BORDER]: '#E6E6E6',
  [ColorEnum.THEME_GRADIENT_DARK]: '#f12c11',
  [ColorEnum.THEME_GRADIENT_LIGHT]: '#f59019',
};
