import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={s.container}>
      <Text>Profile</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffeaa7',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
