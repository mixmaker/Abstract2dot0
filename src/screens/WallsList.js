import {
  View,
  Text,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ToastAndroid,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchWallPackfromId } from '../api';

const WallsList = ({ route, navigation }) => {
  const [wallpack, setWallpack] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { id, description, cover, total } = route.params;

  const fetchWallPack = async () => {
    const { data } = await fetchWallPackfromId(id, page);
    setWallpack(prevdata => [...prevdata, ...data]);
  };
  useEffect(() => {
    fetchWallPack();
    setLoading(false);
  }, [page]);

  const CONTAINER_PADDING = 10;
  const ITEM_PADDING = 15;

  return (
    <View style={{}}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        decelerationRate='normal'
        ListHeaderComponent={() => (
          <View>
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                zIndex: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 18, fontFamily: 'Segoe UI Bold' }}>
                {description}
              </Text>
              <Text style={{ fontFamily: 'Segoe UI' }}>{total} wallpapers</Text>
            </View>
            <Image
              blurRadius={5}
              source={{ uri: cover.replace('http://', 'https://') }}
              style={{
                width: Dimensions.get('window').width,
                height: 100,
              }}
            />
          </View>
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={wallpack}
        onEndReached={() =>
          page * 10 >= total
            ? ToastAndroid.show('End reached', ToastAndroid.SHORT)
            : setPage(page => page + 1)
        }
        progressViewOffset={50}
        // onEndReachedThreshold={60}
        renderItem={({ item }) => (
          <View
            style={{
              margin: ITEM_PADDING + CONTAINER_PADDING / 2,
              overflow: 'hidden',
            }}>
            <Pressable
              onPress={() =>
                navigation.navigate('Wallpaper', { item, name: item.name })
              }>
              <Image
                source={{ uri: item.url_thumb.replace('http://', 'https://') }}
                style={{
                  borderRadius: 6,
                  width:
                    Dimensions.get('window').width / 2 -
                    ITEM_PADDING * 2 -
                    CONTAINER_PADDING,
                  height: 323,
                  resizeMode: 'contain',
                }}
              />
            </Pressable>
          </View>
        )}
      />
      {loading && <ActivityIndicator size="large" color="#fff" />}
    </View>
  );
};

export default WallsList;
