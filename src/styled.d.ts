import 'styled-components';

interface IPalette {
  pink: string;
  white: string;
  yellow: string;
  green: string;
  cyan: string;
  blue: string;
  orange: string;
  violet: string;
}

interface IBorder {
  lightGrey: string;
}

interface ITypography {
  main: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    background: IPalette;
    border: IBorder;

    typography: ITypography;
  }
}
