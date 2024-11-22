import {
    View,
    useWindowDimensions,
    ImageURISource,
    StyleSheet,
  } from 'react-native';
  import React from 'react';
  import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
  } from 'react-native-reanimated';
  import tw from "twrnc"
  
  const ListItem = ({ item, index, x }) => {
    const { width: SCREEN_WIDTH } = useWindowDimensions();
    const rnImageStyle = useAnimatedStyle(() => {
      const translateY = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100],
        Extrapolate.CLAMP
      );
      const opacity = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolate.CLAMP
      );
      return {
        opacity,
        width: SCREEN_WIDTH * 1,
        height: SCREEN_WIDTH * 1,
        transform: [{ translateY}],
      };
    }, [index, x]);
  
    const rnTextStyle = useAnimatedStyle(() => {
      const translateY = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100],
        Extrapolate.CLAMP
      );
      const opacity = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolate.CLAMP
      );
      return {
        opacity,
        transform: [{ translateY}],
      };
    }, [index, x]);
    return (
      <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
        <Animated.Image
          source={item.image}
          style={rnImageStyle}
          resizeMode="contain"
        />
        <Animated.Text style={[styles.textItem, rnTextStyle, tw`px-4`]}>
          {item.text}
        </Animated.Text>
      </View>
    );
  };
  
  export default React.memo(ListItem);
  
  const styles = StyleSheet.create({
    itemContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    textItem: {
      fontWeight: '600',
      lineHeight: 41,
      fontSize: 34,
    },
  });