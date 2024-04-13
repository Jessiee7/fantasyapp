import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {global_styles} from '@/theme/styles.global';
import Header from '@/components/Header';
import {getFontSize, getHeight, getWidth} from '@/utils/utilities';
import {fonts} from '@/theme/fonts';
import {colors} from '@/theme/colors';
import TextInputComp from '@/components/TextInputComp';
import ButtonComp from '@/components/ButtonComp';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {axios} from '@/utils/axios';

interface LoginFields {
  email: string;
  password: string;
  //   rememberMe?: boolean;
}
const Login = () => {
  const navigation = useNavigation();
  const [initialValues, setInitialValues] = useState<LoginFields>({
    email: '',
    password: '',
    // rememberMe: false,
  });
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('email is required'),
    password: Yup.string().required('password is required!!'),
  });
  const onSubmit = async (values: LoginFields) => {
    axios
      .post('api/user/login', {
        email: values.email,
        password: values.password,
      })
      .then(res => {
        console.log(res.data, 'result');
      })
      .catch((err: any) => {
        console.log(err, 'error');
      });
    console.log(values, '00');
  };
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
              paddingTop: getHeight(200),
            },
          ]}>
          {/* <Header headerTitle={'Login'} /> */}
          <View>
            <Text
              style={{
                fontSize: getFontSize(20),
                fontFamily: fonts.BOLD,
                color: colors.BLUE,
              }}>
              {'Login Now'}
            </Text>
            <Text
              style={{
                fontSize: getFontSize(14),
                fontFamily: fonts.MEDIUM,
                color: colors.BLACK_SECONDARY,
              }}>
              {'Please login to continue using our application.'}
            </Text>
          </View>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validateOnMount
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({
              isValid,
              values,
              setFieldValue,
              handleSubmit,
              errors,
              handleChange,
            }) => (
              <View style={{width: '100%'}}>
                <View style={{width: '100%'}}>
                  <TextInputComp
                    placeholder="email"
                    value={values.email}
                    // onChangeText={text => handleChange(text)}
                    onChangeText={text => setFieldValue('email', text)}
                  />
                </View>
                <View style={{width: '100%'}}>
                  <TextInputComp
                    isPassword
                    placeholder="password"
                    value={values.password}
                    // onChangeText={handleChange}
                    onChangeText={text => {
                      text = text.replace(
                        /[^A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/g,
                        '',
                      );
                      setFieldValue('password', text);
                    }}
                  />
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                    marginBottom: getHeight(12),
                    marginTop: getHeight(6),
                  }}>
                  <Text
                    onPress={() => {
                      //@ts-ignore
                      navigation.navigate('ForgetPassword');
                    }}
                    style={{
                      fontFamily: fonts.MEDIUM,
                      fontSize: getFontSize(14),
                      color: colors.BLACK_SECONDARY,
                    }}>
                    {'Forget password?'}
                  </Text>
                </View>
                <View style={{width: '100%', marginTop: getHeight(10)}}>
                  <ButtonComp titleText={'Login'} onPress={handleSubmit} />
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
                    {`Don't have an account?`}
                  </Text>
                  <Text
                    onPress={() => {
                      //@ts-ignore
                      navigation.navigate('SignUp');
                    }}
                    style={{
                      fontFamily: fonts.BOLD,
                      fontSize: getFontSize(14),
                      color: colors.APP_COLOR,
                    }}>
                    {` Sing Up`}
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
