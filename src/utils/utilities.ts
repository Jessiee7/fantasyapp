import {Dimensions, PixelRatio, Platform} from 'react-native';

const fontScale = PixelRatio.getFontScale();
export const {width, height} = Dimensions.get('window');
export const getFontSize = (size: number) => size / fontScale;
export const getRandomId = () => Math.floor(Math.random() * 100000).toString(); //use this only when u need a randome keys on every render
// based on iPhone 8's scale
const wscale = width / 360;
const hscale = height / 720;

export const normalize = (size: number, based = 'width') => {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
export const getWidth = (size: number) => {
  return normalize(size, 'width');
};

export const getHeight = (size: number) => {
  return normalize(size, 'height');
};
