import { css, SerializedStyles } from '@emotion/react';

const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 320,
};

type MediaQuery = (template: TemplateStringsArray, ...args: any[]) => SerializedStyles;

const media = Object.keys(sizes).reduce(
  (object, label) => {
    object[label] = (...args: any[]) => css`
      @media (min-width: ${sizes[label as keyof typeof sizes]}px) {
        ${css(...args)}
      }
    `;
    return object;
  },
  {} as Record<keyof typeof sizes, MediaQuery>
);

export default media;
