import { css } from 'styled-components'
import { ITheme } from './ITheme'

export const defaultTheme: ITheme = {
  colors: {
    'yellow-dark': '#C47F17',
    yellow: '#DBAC2C',
    'yellow-light': '#F1E9C9',

    'purple-darker': '#391781',
    'purple-dark': '#4B2995',
    purple: '#8047F8',
    'purple-light': '#EBE5F9',

    'base-title': '#272221',
    'base-subtitle': '#403937',
    'base-text': '#574F4D',
    'base-label': '#8D8686',

    'base-hover': '#D7D5D5',
    'base-button': '#E6E5E5',
    'base-input': '#EDEDED',
    'base-card': '#F3F2F2',

    background: '#FAFAFA',
    white: '#FFFFFF',
  },
  fonts: {
    'title-xl': css`
      font-size: 3rem;
      line-height: 130%;
      font-weight: 800;
      font-family: 'Baloo 2', cursive;
    `,
    'title-l': css`
      font-size: 2rem;
      line-height: 130%;
      font-weight: 800;
      font-family: 'Baloo 2', cursive;
    `,
    'title-m': css`
      font-size: 1.5rem;
      line-height: 130%;
      font-weight: 800;
      font-family: 'Baloo 2', cursive;
    `,
    'title-s': css`
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: bold;
      font-family: 'Baloo 2', cursive;
    `,
    'title-xs': css`
      font-size: 1.125rem;
      line-height: 130%;
      font-weight: bold;
      font-family: 'Baloo 2', cursive;
    `,

    'text-regular-l': css`
      font-size: 1.125rem;
      line-height: 130%;
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
    `,
    'text-bold-l': css`
      font-size: 1.125rem;
      line-height: 130%;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
    `,
    'text-regular-m': css`
      font-size: 1rem;
      line-height: 130%;
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
    `,
    'text-bold-m': css`
      font-size: 1rem;
      line-height: 130%;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
    `,
    'text-regular-s': css`
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
    `,
    'text-bold-s': css`
      font-size: 0.75rem;
      line-height: 130%;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
    `,

    tag: css`
      font-size: 0.625rem;
      line-height: 130%;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
    `,

    'button-g': css`
      font-size: 0.875rem;
      line-height: 160%;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
    `,

    'button-s': css`
      font-size: 0.75rem;
      line-height: 160%;
      font-family: 'Roboto', sans-serif;
    `,
  },
}
