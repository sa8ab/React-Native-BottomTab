import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  interpolate,
  Extrapolate,
  diffClamp,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
const max = -height + 200;

const App = () => {
  const tY = useSharedValue(0);

  const gestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.start_tY = tY.value;
    },
    onActive: (event, context) => {
      const saveXevent = context.start_tY + event.translationY;
      if (saveXevent > max) {
        tY.value = saveXevent;
      }
    },
    onEnd: event => {
      console.log(event);
      if (event.velocityY > -40) {
        tY.value = withSpring(0);
      } else if (event.velocityY <= -40) {
        tY.value = withSpring(max, {velocity: event.velocityY});
      }
    },
  });

  const sz = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: tY.value,
        },
      ],
    };
  });
  return (
    <View style={{flex: 1}}>
      <Text>hello</Text>
      <PanGestureHandler onGestureEvent={gestureEvent}>
        <Animated.View style={[s.slide, sz]}>
          <View style={s.content} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const s = StyleSheet.create({
  slide: {
    width,
    backgroundColor: 'lightgray',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: 'absolute',
    top: height - 100,
    // bottom: 0,
    left: 0,
    height: height,
    padding: 10,
  },
  content: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
  },
});

export default App;
