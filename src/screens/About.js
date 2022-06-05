import { View, Text, Linking, Pressable } from 'react-native';
import React from 'react';
// https://play.google.com/store/apps/details?id=com.hampusolsson.abstruct&hl=en_IN&gl=US
const About = () => {
  return (
    <View style={{ padding: 15 }}>
      <Text style={{ fontSize: 20, color: '#fff', marginBottom: 5 }}>
        Developer information
      </Text>
      <Text style={{ fontSize: 16 }}>
        {'  '}This app is made by Shoumik Kumbhakar, a passionate mobile and
        fullstack web developer from India.
      </Text>
      <Text
        style={{ fontSize: 20, color: '#fff', marginTop: 20, marginBottom: 5 }}>
        Copyright information
      </Text>
      <Text style={{ fontSize: 16 }}>
        {'  '}The wallpapers in this app are created by Hampus Olisson. I do not
        own the copyright of this wallpapers, nor I distribute these. This app
        is a work of my leisure time and is solely meant for educational
        purposes.
      </Text>
      <Text style={{ marginTop: 15, fontSize: 16 }}>
        Click the button below to go to the artist's app in play store.
      </Text>
      <Pressable
        style={({ pressed }) => ({
          width: 180,
          borderRadius: 6,
          //   marginHorizontal: 15,
          marginTop: 10,
          backgroundColor: pressed ? '#cb2d2d' : '#db4d4d',
          paddingVertical: 5,
          paddingHorizontal: 10,
        })}
        onPress={async () => {
          try {
            await Linking.openURL(
              'https://play.google.com/store/apps/details?id=com.hampusolsson.abstruct&hl=en_IN&gl=US',
            );
          } catch (error) {
            console.log(error);
          }
        }}>
        <Text style={{ fontSize: 16 }}>Abstract on Play Store</Text>
      </Pressable>
    </View>
  );
};

export default About;
