import {Image, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import SettingScreen from '../screens/SettingScreen';
import Schdule from '../screens/Schdule';
import HomeScreen from '@/screens/home/HomeScreen';
import {getWidth} from '@/utils/utilities';
import SwiperScreen from '@/screens/swiper/SwiperScreen';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused, size}) => {
            return (
              <View>
                <Image
                  source={require('@/assets/images/home.png')}
                  style={{width: getWidth(20), height: getWidth(20)}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="SwiperScreen"
        component={SwiperScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Swiper',
          tabBarIcon: ({color, focused, size}) => {
            return (
              <View>
                <Image
                  source={require('@/assets/images/home.png')}
                  style={{width: getWidth(20), height: getWidth(20)}}
                />
              </View>
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused, size}) => {
            return (
              <View>
                <Image
                  source={require('@/assets/images/home.png')}
                  style={{width: getWidth(20), height: getWidth(20)}}
                />
              </View>
            );
          },
        }}
      /> */}
      {/* <Tab.Screen
        name="Schdule"
        component={Schdule}
        options={{
          headerShown: false,
          tabBarLabel: 'Schdule',
          tabBarIcon: ({color, focused, size}) => {
            return (
              <View>
                <Image
                  source={require('@/assets/images/home.png')}
                  style={{width: getWidth(20), height: getWidth(20)}}
                />
              </View>
            );
          },
        }}
      /> */}
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, focused, size}) => {
            return (
              <View>
                <Image
                  source={require('@/assets/images/home.png')}
                  style={{width: getWidth(20), height: getWidth(20)}}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
