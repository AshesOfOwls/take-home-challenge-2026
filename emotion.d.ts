import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      textDefault: string;
      backgroundContent: string;
      backgroundMenu: string;
    };
    fontFamilies: {
      proxima: string;
    };
  }
}
