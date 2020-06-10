import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={s.container}>
      <Text>Home</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fada80',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
