import { View, Text, Image, Dimensions, Pressable } from 'react-native';
import React from 'react';

const ImageCard = ({ item, RIGHT_OFFSET, MARGIN_RIGHT, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('WallsList', { name: item.name })}>
      <View style={{ marginRight: MARGIN_RIGHT, marginTop: 20 }}>
        <Text
          style={{ fontSize: 32, marginVertical: 15, fontFamily: 'Segoe UI' }}>
          {item.name}
        </Text>
        <View
          style={{
            borderRadius: 12,
            overflow: 'hidden',
          }}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              // transform: [{translateX:'-50%'}],
              zIndex: 5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}>
            <Image
              source={{ uri: item.icon_image_url }}
              style={{ height: 80, width: 80, marginBottom: 10 }}
            />
            <Text style={{ fontSize: 18, fontFamily: 'Segoe UI Bold' }}>
              {item.description}
            </Text>
            <Text
              style={{
                marginTop: 5,
                backgroundColor: '#fff',
                color: '#111',
                paddingHorizontal: 7,
                paddingVertical: 3,
                borderRadius: 10,
              }}>
              {item.no_of_wallpapers} wallpapers
            </Text>
          </View>
          <Image
            source={{ uri: item.cover_image_url }}
            style={{
              height: Dimensions.get('window').height - 180,
              width: Dimensions.get('window').width - RIGHT_OFFSET,
            }}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default ImageCard;
