import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  Animated,
} from 'react-native';
import React from 'react';

const Splash = ({ opacity }) => {
  return (
    <Animated.View
      style={{
        opacity,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#fff',
        zIndex: 10,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/images/splash.png')}
          style={{
            height: 100,
            width: 400,
          }}
        />
      </View>
      <Text
        style={{
          color: '#111',
          zIndex: 10,
          position: 'absolute',
          bottom:
            Dimensions.get('screen').height -
            Dimensions.get('window').height -
            StatusBar.currentHeight +
            25,
          alignSelf: 'center',
        }}>
        Made with ♥ by Shoumik Kumbhakar
      </Text>
    </Animated.View>
  );
};

export default Splash;
