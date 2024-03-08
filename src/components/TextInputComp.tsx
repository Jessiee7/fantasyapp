import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {StyleProp} from 'react-native';

import {colors} from '../theme/colors';
import {getFontSize, getHeight, getWidth, width} from '../utils/utilities';
import {EyeIcon, EyeSlashIcon} from '../theme/icons';
interface Props extends TextInputProps {
  textInputStyles?: StyleProp<TextStyle>;
  containerStyles?: StyleProp<ViewStyle>;
  isPassword?: boolean;
  placeholder?: string;
}
const TextInputComp: React.FC<Props> = ({
  textInputStyles,
  containerStyles,
  isPassword,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(isPassword ? true : false);
  return (
    <View style={[styles.textInputView, containerStyles]}>
      <TextInput
        placeholder={placeholder || ''}
        style={[styles.textInput, textInputStyles]}
        secureTextEntry={showPassword}
        placeholderTextColor={colors.GRAY_TEXT}
        {...props}
      />

      {isPassword && (
        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          style={{
            width: '12%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {!showPassword ? (
            <EyeIcon size={16} color={colors.BLUE} />
          ) : (
            <EyeSlashIcon size={16} color={colors.BLUE} />
          )}
        </Pressable>
      )}
    </View>
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  textInputView: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.GRAY_BORDER,
    height: getHeight(46),
    flexDirection: 'row',
    marginVertical: width / 32,
  },
  textInput: {
    paddingStart: 10,
    width: '88%',
    color: colors.BLUE,
    height: getHeight(46),
    fontSize: getFontSize(16),
    textAlignVertical: 'center',
    alignItems: 'center',
  },
});
