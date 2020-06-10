import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');
const bottomTabWidth = width - 10;

const TabItem = ({
  onTabPress,
  route,
  index,
  state,
  activeColor,
  descriptors,
  onTabLongPress,
}) => {
  const isActive = index === state.index;
  const color = isActive ? 'white' : 'gray';
  const textScale = useSharedValue(0);
  const iconScale = useSharedValue(1);
  useEffect(() => {
    if (isActive) {
      textScale.value = 1;
      iconScale.value = 0;
    } else {
      textScale.value = 0;
      iconScale.value = 1;
    }
  }, [isActive]);
  const textZ = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(textScale.value, {
            stiffness: 80, //default: 100
            damping: 20, //default: 10
            mass: 0.2, //default: 1
          }),
        },
      ],
    };
  });
  const iconZ = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: iconScale.value,
        },
      ],
    };
  });
  const {options} = descriptors[route.key];
  return (
    <TouchableOpacity
      onPress={() => onTabPress(route, index)}
      onLongPress={() => onTabLongPress(route)}
      style={s.tabItem}>
      <Animated.View style={[s.icon, iconZ]}>
        <Icon name={options.iconName} size={24} color={color} />
      </Animated.View>
      <Animated.Text style={[{color}, s.text, textZ]}>
        {route.name}
      </Animated.Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  tabItem: {
    // backgroundColor: '#ecf0f1',
    padding: 14,
    width: bottomTabWidth / 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    paddingLeft: 4,
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
  },
});

export default TabItem;
