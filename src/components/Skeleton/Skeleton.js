import React, {useEffect} from 'react';
import {View, Animated, StyleSheet, Easing, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from 'react-native-paper';

const {width} = Dimensions.get('window');

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);

const Skeleton = () => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear.inOut,
        useNativeDriver: true,
      }),
    ).start();
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  return (
    <View style={skeletonStyles.container} testID="skeleton">
      <AnimatedLG
        colors={[
          Colors.grey600,
          Colors.grey400,
          Colors.grey400,
          Colors.grey600,
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          ...StyleSheet.absoluteFill,
          transform: [{translateX: translateX}],
        }}
      />
    </View>
  );
};

const skeletonStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey600,
    borderColor: Colors.grey400,
    height: 75,
    marginVertical: 8,
    width: width,
    elevation: 8,
  },
});
export default Skeleton;
