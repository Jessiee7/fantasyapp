import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {getFontSize, getHeight, height, width} from '@/utils/utilities';
import {colors} from '@/theme/colors';
import {fonts} from '@/theme/fonts';
interface Props {
  headerTitle?: string;
  onBackPress?: () => void;
  backIcon?: boolean;
  crossIcon?: boolean;
  onRightIconPress?: () => void;
  rightIconComp?: JSX.Element;
  leftIconComp?: JSX.Element;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  shadow?: boolean;
}
const Header: React.FC<Props> = ({
  headerTitle,
  onBackPress,
  backIcon,
  crossIcon,
  onRightIconPress,
  rightIconComp,
  containerStyle,
  titleStyle,
  leftIconComp,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {backIcon && (
        <TouchableOpacity onPress={onBackPress} style={styles.backIconView}>
          {/* <BackIcon color={colors.BLACK} /> */}
          <Text>{'Back'}</Text>
        </TouchableOpacity>
      )}
      {headerTitle && (
        <Text
          style={[
            {
              fontSize: getFontSize(20),
              fontFamily: fonts.MEDIUM,
              color: '#000',
              maxWidth: '74%',
              textAlign: 'center',
            },
            titleStyle,
          ]}>
          {headerTitle}
        </Text>
      )}
      {crossIcon && (
        <TouchableOpacity
          style={[styles.crossIconView]}
          onPress={onRightIconPress}>
          {/* <CrossIcon color={colors.BLACK} /> */}
        </TouchableOpacity>
      )}

      {rightIconComp && (
        <TouchableOpacity
          style={styles.crossIconView}
          onPress={onRightIconPress}>
          {rightIconComp}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: height / 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.GRAY_BORDER,
    backgroundColor: colors.WHITE,
    borderBottomWidth: 1,
  },
  backIconView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    left: 10,
    height: '100%',
    width: 40,
  },
  crossIconView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    right: 10,
    height: '100%',
    width: 40,
  },
  SaveIconView: {},
  editIconView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    right: 10,
    height: '100%',
    width: 40,
  },
});
