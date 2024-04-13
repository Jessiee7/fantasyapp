import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {global_styles} from '@/theme/styles.global';
import Header from '@/components/Header';
import TextInputComp from '@/components/TextInputComp';

const HomeScreen = () => {
  const SearchBar = () => {
    return (
      <View>
        <TextInputComp placeholder="Search language..." />
      </View>
    );
  };
  return (
    <View style={global_styles.container}>
      <Header headerTitle={'Dashboard'} />
      <View style={{paddingHorizontal: 16}}>
        <SearchBar />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
