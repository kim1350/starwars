import {Dimensions, StyleSheet} from 'react-native';

export const {width, height} = Dimensions.get('window');
export const colors = {
  BG: '#1F2A63',
  BG2: '#2F3F96',
  TEXT_TITLE: '#212121',
  ORANGE: '#FF6900',
  INACTIVE_TEXT: '#9E9E9E',
  SECOND_BTN: '#EEEEEE',
  BLACK: '#000000',
  BLACK21: '#212121',
  WHITE: '#FFFFFF',
  BORDER_GRAY: '#E0E0E0',
  SLIDE_COLOR: '#D0D0D0',
  GREEEN: '#45B828',
  YELLOW: '#FFC107',
  REDD: '#FF3D00',
  REQUIRED_ERROR: '#E54141',
  REQUIRED_BACKGROUND: '#FFE2E2',
  GREY_DARK_TEXT: '#8F8F8F',
  GREEN_AFISHA: '#168D25',
  GRAY_CYRCLE: '#A7A7A7',
  GREY_DARK: '#8F8F8F',
  PRIMARY_LIGHT: '#FFEDE0',
  INCOME_COLOR: '#58BF68',
  REFUND_COLOR: '#F87171',
  GRAY: '#D9D9D9',
  GRAY_INDICATOR: '#C9C9C9',
  RED: '#FF0000',
  NO_NAME_FFF6C7: '#FFF6C7',
  NO_NAME_B58200: '#B58200',
  GREEEN_STATUS: '#58BF68',
  GRAY_BG: '#F1F1F1',
  GREEN_LIGHT: '#D9F8DD',
  GREEN_ORDER: '#428C4B',
  RED_LIGHT: '#FFE3E3',
  GRAY_LIGHT: '#FAFAFA',
  GUYABANO: '#F8F8F8',
  GRAY_DARK: '#606060',
};

export const stylesConst = StyleSheet.create({
  shadow: {
    elevation: 1,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  text_title_32m: {
    fontSize: 32,
    fontWeight: '500',
    color: colors.TEXT_TITLE,
  },
  text_title_22m: {
    fontSize: 22,
    fontWeight: '500',
    color: colors.TEXT_TITLE,
  },
  text_title_22r: {
    fontSize: 22,
    fontWeight: '400',
    color: colors.TEXT_TITLE,
  },
  text_title_18m: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.TEXT_TITLE,
  },
});
