import {
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
  Pressable,
  ToastAndroid,
  ActivityIndicator,
  StyleSheet,
  Modal,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import DeviceWallpaper from 'react-native-device-wallpaper';

const Wallpaper = ({ route, navigation }) => {
  const { item } = route.params;
  const [wallpaper, setWallpaper] = useState();
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const topbarRef = useRef();

  useEffect(() => {
    setWallpaper(item);
  }, []);

  const setWallpaperHandler = async where => {
    ToastAndroid.show('Please wait...', ToastAndroid.LONG);
    var res;
    if (where === 'Home') {
      res = await DeviceWallpaper.setWallPaper(
        wallpaper.url_res3.replace('http://', 'https://'),
      );
    }
    if (where === 'Lock') {
      res = await DeviceWallpaper.setLockScreen(
        wallpaper.url_res3.replace('http://', 'https://'),
      );
    }
    if (where === 'Both') {
      res = await DeviceWallpaper.setBoth(
        wallpaper.url_res3.replace('http://', 'https://'),
      );
    }
    ToastAndroid.show(
      res ? 'Successfully set wallpaper' : 'Some error occurred',
      ToastAndroid.SHORT,
    );
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => {
          setModalOpen(!modalOpen);
        }}>
        <Pressable
          onPress={() => setModalOpen(false)}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}>
          <Pressable
            style={{
              backgroundColor: '#111',
              padding: 30,
              alignItems: 'center',
              borderRadius: 10,
              width: Dimensions.get('window').width,
            }}>
            <Text style={{ fontSize: 20, marginBottom: 10, color: '#fff' }}>
              Set wallpaper on
            </Text>
            <Pressable
              style={styles.button1}
              onPress={() => setWallpaperHandler('Home')}>
              <Text style={styles.text1}>HomeScreen</Text>
            </Pressable>
            <Pressable
              style={styles.button1}
              onPress={() => setWallpaperHandler('Lock')}>
              <Text style={styles.text1}>LockScreen</Text>
            </Pressable>
            <Pressable
              style={styles.button1}
              onPress={() => setWallpaperHandler('Both')}>
              <Text style={styles.text1}>Both</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
      {loading && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 5,
          }}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
      {wallpaper && (
        <View>
          <View
            ref={topbarRef}
            style={{
              paddingTop: StatusBar.currentHeight + 10,
              paddingBottom: 15,
              paddingHorizontal: 15,
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(0,0,0,0.4)',
              zIndex: 5,
            }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={require('../assets/images/arrow-left.png')}
                style={{ height: 25, width: 25 }}
              />
            </Pressable>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                fontSize: 18,
                color: '#fff',
              }}>
              {item.name}
            </Text>
          </View>
          <Image
            source={{ uri: wallpaper.url_res3.replace('http://', 'https://') }}
            onLoadEnd={() => setLoading(false)}
            style={{
              height: Dimensions.get('screen').height,
              width: Dimensions.get('screen').width,
              resizeMode: 'cover',
            }}
          />
          <Pressable
            onPress={() => setModalOpen(true)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 5,
              backgroundColor: 'rgba(0,0,0,0.4)',
              paddingHorizontal: 15,
              paddingTop: 15,
              paddingBottom:
                Dimensions.get('screen').height -
                Dimensions.get('window').height -
                StatusBar.currentHeight +
                15,
            }}>
            <Image
              source={{
                uri: 'https://www.iconsdb.com/icons/preview/white/arrow-53-xxl.png',
              }}
              style={{
                height: 22,
                width: 22,
                resizeMode: 'cover',
              }}
            />
            <Text style={{ fontSize: 18, color: '#fff', marginLeft: 10 }}>
              Set Wallpaper
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  button1: {
    marginVertical: 5,
    backgroundColor: '#2b2b2b',
    width: 300,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 24,
  },
  text1: {
    fontSize: 18,
  },
});
export default Wallpaper;
