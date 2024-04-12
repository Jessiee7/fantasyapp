import {
  FlatList,
  FlatListProps,
  Linking,
  ListRenderItem,
  NativeModules,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef} from 'react';
import Swiper from 'react-native-swiper';
import {UserDataType, data} from '@/utils/data';
import {colors} from '@/theme/colors';
import {
  getFontSize,
  getHeight,
  getWidth,
  height,
  width,
} from '@/utils/utilities';
import {global_styles} from '@/theme/styles.global';
import {fonts} from '@/theme/fonts';
import Header from '@/components/Header';
const dddd = `In React, the useEffect hook is used to perform side effects in functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM. useEffect runs after every render and by default on the initial render. It takes a function as its first argument, which will be executed after the component has been rendered. Additionally, it can take a second argument, an array of dependencies, to control when the effect runs. This helps manage resources efficiently and prevents unnecessary re-renders. Overall, useEffect allows developers to handle side effects in React's functional components effectively.`;
const SwiperScreen = () => {
  const layoutHeighRef = useRef<any>(null);
  const statusBarHeighRef = useRef<any>(null);
  const {StatusBarManager} = NativeModules;
  useEffect(() => {
    Platform.OS == 'ios' &&
      StatusBarManager.getHeight(({height}: any) => {
        statusBarHeighRef.current = height;
      });
  }, []);
  const renderItem: ListRenderItem<UserDataType> = useCallback(
    ({item, index}) => {
      return (
        <View
          style={{
            //   height: height / 1.2,
            height: layoutHeighRef.current,
            width: width,
            // backgroundColor: index % 2 ? '#d667a6' : '#151db0',
            // backgroundColor: '#e8e8fe',
            backgroundColor: '#f9fafb',
            // backgroundColor: '#EAF0F1',
            // paddingTop: getHeight(20),
            // paddingHorizontal: getWidth(16),
            // justifyContent: 'space-between',
            paddingBottom: getHeight(10),
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              paddingHorizontal: getWidth(10),
              borderColor: colors.GRAY_BORDER,
              // justifyContent: 'center',
              // alignItems: 'center',
              paddingVertical: getHeight(10),
            }}>
            <Text
              style={{
                color: colors.BLUE,
                fontSize: getFontSize(24),
                fontFamily: fonts.SEMIBOLD,
                // marginBottom: getHeight(10),
                // alignSelf: 'center',
              }}>
              {item.title.slice(0, 20)}
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: getWidth(16),
              justifyContent: 'space-between',
              paddingTop: getHeight(10),
              flex: 1,
            }}>
            <View>
              <Text
                style={{
                  color: colors.BLACK,
                  fontSize: getFontSize(20),
                  fontFamily: fonts.REGULAR,
                  //   textAlign: 'justify',
                }}>
                {/* {item.content} */}
                {item.content.slice(0, 500)}
                {/* {dddd} */}
              </Text>
              <View
                style={{
                  marginVertical: getHeight(10),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: colors.BLACK,
                    fontSize: getFontSize(13),
                    fontFamily: fonts.ITALIC,
                  }}>
                  {'Updated at: '}
                </Text>
                <Text
                  style={{
                    color: colors.BLACK,
                    fontSize: getFontSize(11),
                    fontFamily: fonts.ITALIC,
                  }}>
                  {item.publishedAt}
                </Text>
              </View>
              <Text
                onPress={() => {
                  Linking.openURL(
                    'https://react.dev/reference/react/useEffect',
                  );
                }}
                style={{
                  color: colors.BLACK,
                  fontSize: getFontSize(14),
                  fontFamily: fonts.ITALIC,
                  textDecorationLine: 'underline',
                }}>
                {'source'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                bottom: 0,
              }}>
              <Text style={styles.bottomButtonText}>{'Share'}</Text>
              <Text style={styles.bottomButtonText}>{'Bookmark'}</Text>
              <Text style={styles.bottomButtonText}>{'Like'}</Text>
            </View>
          </View>
        </View>
      );
    },
    [data.posts],
  );
  const renderItemDetails = useCallback(() => {
    return (
      <ScrollView
        style={{
          //   height: height / 1.2,
          height: layoutHeighRef.current,
          width: width,
          // backgroundColor: index % 2 ? '#d667a6' : '#151db0',
          // backgroundColor: '#F5F5F5',
          // backgroundColor: '#EAF0F1',
          paddingTop: getHeight(20),
          paddingHorizontal: getWidth(16),
          // backgroundColor: '#FFF',
          backgroundColor: '#e8e8fe',
        }}>
        <Text
          style={{
            color: colors.RED,
            fontSize: getFontSize(26),
            fontFamily: fonts.SEMIBOLD,
            marginBottom: getHeight(10),
            alignSelf: 'center',
          }}>
          {/* {item.title} */}
          {'lallalallal'}
        </Text>

        <Text
          style={{
            color: colors.BLACK,
            fontSize: getFontSize(20),
            fontFamily: fonts.REGULAR,
            //   textAlign: 'justify',
          }}>
          {/* {item.content} */}
          {/* {item.content.slice(0, 500)} */}
          {dddd}
        </Text>
        <View
          style={{
            marginVertical: getHeight(10),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: colors.BLACK,
              fontSize: getFontSize(13),
              fontFamily: fonts.ITALIC,
            }}>
            {'Updated at: '}
          </Text>
          <Text
            style={{
              color: colors.BLACK,
              fontSize: getFontSize(11),
              fontFamily: fonts.ITALIC,
            }}>
            {'14/03/2023 17:22:20'}
          </Text>
        </View>
        <Text
          onPress={() => {
            Linking.openURL('https://react.dev/reference/react/useEffect');
          }}
          style={{
            color: colors.BLACK,
            fontSize: getFontSize(14),
            fontFamily: fonts.ITALIC,
            textDecorationLine: 'underline',
          }}>
          {'source'}
        </Text>
      </ScrollView>
    );
  }, []);
  return (
    <View
      // style={{flex: 1, paddingTop: statusBarHeighRef.current}}
      style={{flex: 1}}
      onLayout={event => {
        //   console.log(event.nativeEvent.layout.height, height / 1.2);
        layoutHeighRef.current = event.nativeEvent.layout.height;
      }}>
      <Swiper
        style={{}}
        showsPagination={false}
        loop={false}
        onScrollBeginDrag={() => {
          console.log('--');
        }}>
        <FlatList
          data={data.posts}
          pagingEnabled
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          // horizontal={true} // row instead of column
          // Add the 4 properties below for snapping
          // snapToAlignment={'start'}
          // snapToInterval={10} // Adjust to your content width
          // decelerationRate={'fast'}
          style={{width: width, height: height}}
          contentContainerStyle={{}}
          showsVerticalScrollIndicator={false}
        />
        <View>{renderItemDetails()}</View>
      </Swiper>
    </View>
  );
};

export default SwiperScreen;

const styles = StyleSheet.create({
  bottomButtonView: {},
  bottomButtonText: {
    marginHorizontal: getWidth(10),
    paddingVertical: getHeight(6),
    fontSize: getFontSize(16),
    fontFamily: fonts.MEDIUM,
  },
});
