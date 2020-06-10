import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SettingScreen = () => {
  return (
    <View style={s.container}>
      <Text>Setting</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fd79a8',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingScreen;
