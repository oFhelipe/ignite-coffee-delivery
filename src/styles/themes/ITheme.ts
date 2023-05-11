import { FlattenSimpleInterpolation } from 'styled-components'

export interface ITheme {
  colors: {
    'yellow-dark': string
    yellow: string
    'yellow-light': string

    'purple-darker': string
    'purple-dark': string
    purple: string
    'purple-light': string

    'base-title': string
    'base-subtitle': string
    'base-text': string
    'base-label': string

    'base-hover': string
    'base-button': string
    'base-input': string
    'base-card': string

    background: string
    white: string
  }

  fonts: {
    'title-xl': FlattenSimpleInterpolation
    'title-l': FlattenSimpleInterpolation
    'title-m': FlattenSimpleInterpolation
    'title-s': FlattenSimpleInterpolation
    'title-xs': FlattenSimpleInterpolation
    'text-regular-l': FlattenSimpleInterpolation
    'text-bold-l': FlattenSimpleInterpolation
    'text-regular-m': FlattenSimpleInterpolation
    'text-bold-m': FlattenSimpleInterpolation
    'text-regular-s': FlattenSimpleInterpolation
    'text-bold-s': FlattenSimpleInterpolation
    tag: FlattenSimpleInterpolation
    'button-g': FlattenSimpleInterpolation
    'button-s': FlattenSimpleInterpolation
  }
}
