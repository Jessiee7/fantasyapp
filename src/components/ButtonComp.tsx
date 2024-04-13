import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';
import {getFontSize, getHeight, height} from '../utils/utilities';
import {fonts} from '@/theme/fonts';
interface Props {
  titleText: string;
  disabled?: boolean;
  onPress: () => void;
  icon?: React.JSX.Element;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  buttonColor?: string;
}
const ButtonComp: React.FC<Props> = ({
  titleText,
  disabled,
  onPress,
  icon,
  containerStyles,
  textStyles,
  buttonColor,
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={disabled || false}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: disabled
            ? colors.GRAY_BACKGROUNDD
            : buttonColor
            ? buttonColor
            : colors.BLUE,
        },
        containerStyles,
      ]}
      {...props}>
      <Text
        style={[
          styles.text,
          textStyles,
          {
            color: disabled ? colors.GRAY : colors.WHITE,
          },
        ]}>
        {titleText || 'Add Button text'}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: getHeight(44),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: getFontSize(16),
    color: colors.WHITE,
    fontFamily: fonts.MEDIUM,
  },
});
