import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import TabItem from './TabItem';

const {width} = Dimensions.get('window');
const bottomTabWidth = width - 10;

const AnimatedTabBar = ({state, navigation, descriptors, activeColor}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const thing = useSharedValue(0);

  const sz = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(thing.value, {
            stiffness: 80, //default: 100
            damping: 20, //default: 10
            mass: 0.2, //default: 1
          }),
        },
      ],
    };
  });
  //   console.log(props.state.routes);

  const onTabPress = (route, index) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });
    const isFocused = state.index === index;
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
      thing.value = bottomTabWidth * (index / 4);
    }
  };
  const onTabLongPress = route => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };
  return (
    <View style={s.container}>
      <Animated.View style={[s.mover, sz]}>
        <View style={s.moverIn} />
      </Animated.View>
      {state.routes.map((route, index) => {
        return (
          <TabItem
            activeColor={activeColor}
            key={route.key}
            route={route}
            index={index}
            state={state}
            descriptors={descriptors}
            onTabPress={onTabPress}
            onTabLongPress={onTabLongPress}
          />
        );
      })}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: '#181818',
    flexDirection: 'row',
    borderRadius: 14,
    position: 'absolute',
    bottom: 0,
    left: 0,
    margin: 5,
    elevation: 4,
    // justifyContent: 'space-evenly',
  },
  mover: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: bottomTabWidth / 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  moverIn: {
    backgroundColor: '#e74c3c',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default AnimatedTabBar;
