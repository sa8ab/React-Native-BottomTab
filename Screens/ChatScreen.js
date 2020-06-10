import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ChatScreen = () => {
  return (
    <View style={s.container}>
      <Text>Chat</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#55efc4',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatScreen;
