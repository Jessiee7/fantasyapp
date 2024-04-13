import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import {global_styles} from '@/theme/styles.global';
import Login from '@/screens/auth/Login';
import SignUp from '@/screens/auth/SignUp';
import ForgetPassword from '@/screens/auth/ForgetPassword';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <SafeAreaView style={global_styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="Main" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigator;
