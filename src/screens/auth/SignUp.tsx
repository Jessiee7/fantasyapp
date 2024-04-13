import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {global_styles} from '@/theme/styles.global';
import Header from '@/components/Header';
import {getFontSize, getHeight, getWidth, width} from '@/utils/utilities';
import {fonts} from '@/theme/fonts';
import {colors} from '@/theme/colors';
import TextInputComp from '@/components/TextInputComp';
import ButtonComp from '@/components/ButtonComp';
import {useNavigation} from '@react-navigation/native';
import {CheckIcon} from '@/theme/icons';

const SignUp = () => {
  const navigation = useNavigation();
  const [checkPrivacy, setCheckPrivacy] = useState(false);
  return (
    <SafeAreaView style={global_styles.container}>
      <KeyboardAvoidingView
        style={global_styles.container}
        behavior={'padding'}>
        <View
          style={[
            global_styles.container,
            {
              paddingHorizontal: getWidth(20),
              paddingVertical: getHeight(30),
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: getHeight(10),
              width: '100%',
            },
          ]}>
          <View style={{width: '100%'}}>
            <Text
              style={{
                fontSize: getFontSize(20),
                fontFamily: fonts.BOLD,
                color: colors.BLUE,
              }}>
              {'Sign Up'}
            </Text>
            <Text
              style={{
                fontSize: getFontSize(14),
                fontFamily: fonts.MEDIUM,
                color: colors.BLACK_SECONDARY,
              }}>
              {
                'Please register with the email and signup continue using our application.'
              }
            </Text>
          </View>
          <View style={{width: '100%'}}>
            <View style={{width: '100%'}}>
              <TextInputComp placeholder="email" />
            </View>
            <View style={{width: '100%'}}>
              <TextInputComp isPassword placeholder="password" />
            </View>
            <View
              style={{
                marginBottom: getHeight(12),
                marginTop: getHeight(6),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setCheckPrivacy(!checkPrivacy);
                }}
                style={{
                  width: getWidth(18),
                  height: getWidth(18),
                  borderWidth: 2,
                  borderColor: checkPrivacy
                    ? colors.APP_COLOR
                    : colors.BLACK_SECONDARY,
                  borderRadius: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: checkPrivacy
                    ? colors.APP_COLOR
                    : colors.WHITE,
                }}>
                {checkPrivacy && (
                  <CheckIcon size={getWidth(10)} color={colors.WHITE} />
                )}
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: fonts.MEDIUM,
                  fontSize: getFontSize(14),
                  color: colors.BLACK_SECONDARY,
                  marginStart: getWidth(10),
                }}>
                {'I agree with privacy policy.'}
              </Text>
            </View>
            <View style={{width: '100%', marginTop: getHeight(10)}}>
              <ButtonComp
                titleText={'Sing Up'}
                onPress={() => {
                  console.log('ligeed');
                }}
              />
            </View>
            <View
              style={{
                // alignItems: 'flex-end',
                marginBottom: getHeight(12),
                marginTop: getHeight(10),
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontFamily: fonts.MEDIUM,
                  fontSize: getFontSize(14),
                  color: colors.BLACK_SECONDARY,
                }}>
                {`You already have an account?`}
              </Text>
              <Text
                onPress={() => {
                  //@ts-ignore
                  navigation.navigate('Login');
                }}
                style={{
                  fontFamily: fonts.BOLD,
                  fontSize: getFontSize(14),
                  color: colors.APP_COLOR,
                }}>
                {` Login`}
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
