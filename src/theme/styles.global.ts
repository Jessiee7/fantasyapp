import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {getFontSize} from '../utils/utilities';

export const global_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  headingText: {
    fontSize: getFontSize(18),
    fontWeight: '500',
    color: colors.BLACK_SECONDARY,
  },
  subHedingText: {
    fontSize: getFontSize(16),
    color: colors.BLACK,
    fontWeight: '500',
  },
});
