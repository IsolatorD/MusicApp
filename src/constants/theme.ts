import { Dimensions } from 'react-native'

import { Fonts } from '../interfaces/Theme'

const { width, height } = Dimensions.get('window')

export const COLORS = {
  // Base
  primary: '#FF296D',
  secondary: '#005679',
  // Colors
  black: '#01012A',
  white: '#FFFFFF',
  lightBlue: '#05D8E8',
  lightGrayBlue: '#D1F9FF',
  transparentWhite: 'rgba(255, 255, 255, 0.2)'
}

export const SIZES = {
  // Global
  base: 8,
  font: 14,
  padding: 20,
  margin: 22,
  radius: 12,
  // Fonts
  largeTitle: 55,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  // App dimensions
  width,
  height
}

export const FONTS: Fonts = {
  largeTitle: { fontFamily: 'Roboto-Black', fontSize: SIZES.largeTitle, lineHeight: 55 },
  h1: { fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22 }
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme