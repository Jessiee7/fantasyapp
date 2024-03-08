import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {colors} from '../theme/colors';
import {getFontSize, getHeight, getWidth} from '../utils/utilities';
import ButtonComp from '../components/ButtonComp';
import {Shedules} from '../utils/types';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {keys} from '../utils/keys';
import {shouldUseActivityState} from 'react-native-screens';
import moment from 'moment';

const Home = () => {
  const navigation = useNavigation();
  const [shedules, setShedules] = useState<Shedules[]>([]);
  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem(keys.SCHEDULE).then(res => {
        if (res != null) {
          const shedules_data = JSON.parse(res);
          setShedules(shedules_data);
        }
      });
    }, []),
  );

  const deleteShedule = async (id: number) => {
    const shedules_data = [...shedules];
    const updated_shedules = shedules_data.filter(values => values.id !== id);
    setShedules(updated_shedules);
    await AsyncStorage.setItem(keys.SCHEDULE, JSON.stringify(updated_shedules));
  };
  const editShedule = (id: number) => {
    ///@ts-ignore
    navigation.navigate('Schdule', {scheduleId: id});
  };
  const renderShedules = useCallback(
    (items: Shedules) => {
      return (
        <View
          style={{
            width: '100%',
            backgroundColor: colors.LIGHT_BACKGROUND,
            borderRadius: 10,
            padding: getHeight(14),
            marginTop: getHeight(10),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingEnd: getWidth(20),
            }}>
            <Text
              style={{
                fontSize: getFontSize(18),
                color: colors.BLACK,
                fontWeight: '700',
              }}>
              {items.name}
            </Text>
            <Text
              style={{
                fontSize: getFontSize(18),
                color: colors.BLACK,
                fontWeight: '700',
              }}>
              {moment(items.date).format('DD/MM/YYYY')}
            </Text>
          </View>
          <Text
            style={{
              fontSize: getFontSize(14),
              color: colors.GRAY,
              marginVertical: getHeight(10),
            }}>
            {'sub heading text will show here/ match details...'}
          </Text>
          <View style={{width: '100%'}}>
            <View
              style={{
                flexDirection: 'row',
                width: '30%',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.subHedingText}>{'Start: '}</Text>
              <Text style={styles.subHedingText}>{items.startTime}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '30%',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.subHedingText}>{'End: '}</Text>
              <Text style={styles.subHedingText}>{items.endTime}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: getHeight(20),
            }}>
            <View style={{width: '46%'}}>
              <ButtonComp
                titleText={'Edit'}
                onPress={() => editShedule(items.id)}
                containerStyles={{height: getHeight(32)}}
              />
            </View>
            <View style={{width: '46%'}}>
              <ButtonComp
                // disabled
                titleText={'Delete'}
                onPress={() => deleteShedule(items.id)}
                containerStyles={{height: getHeight(32)}}
              />
            </View>
          </View>
        </View>
      );
    },
    [shedules],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{'Match List'}</Text>
      <View style={{flex: 1}}>
        <FlatList
          data={shedules}
          keyExtractor={item => item.id.toString()}
          // renderItem={({item}) => renderSheduless(item)}
          renderItem={({item}) => renderShedules(item)}
          showsVerticalScrollIndicator={false}
          extraData={shedules}
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  marginTop: getHeight(20),
                }}>
                <Text
                  style={{
                    fontSize: getFontSize(18),
                    color: colors.GRAY_TEXT,
                  }}>
                  {'No shedules found'}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingVertical: getHeight(20),
    paddingHorizontal: getWidth(20),
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
