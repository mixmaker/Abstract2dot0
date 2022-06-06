import { Dimensions, FlatList, View, StyleSheet, Animated } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { fetchHomeData } from '../api';
import ImageCard from '../components/ImageCard';
import { useHeaderHeight } from '@react-navigation/elements';
import LinearGradient from 'react-native-linear-gradient';
import Splash from '../components/Splash';
import { SystemBars } from 'react-native-bars';

const Home = ({ navigation }) => {
  const [homeData, setHomeData] = useState();
  const [currentItem, setCurrentItem] = useState(homeData?.data[0]);
  const [loading, setLoading] = useState(true);
  const [opacity] = useState(new Animated.Value(1));

  const headerHeight = useHeaderHeight();
  const MARGIN_RIGHT = 30;
  const RIGHT_OFFSET = 100;

  const loadApp = async () => {
    const data = await fetchHomeData();
    setHomeData(data);
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => setLoading(false));
  };

  useEffect(() => {
    loadApp();
  }, []);

  const _onViewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentItem(viewableItems[0].item);
  });
  return (
    <View
      style={{
        flex: 1,
        paddingTop: headerHeight,
      }}>
      <SystemBars
        animated={true}
        barStyle={loading ? 'dark-content' : 'light-content'}
      />
      {loading && <Splash opacity={opacity} />}
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
        colors={[
          currentItem?.gradient_start || '#FFFFFF00',
          currentItem?.gradient_end || '#FFFFFF00',
        ]}
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
      />
      <FlatList
        data={homeData?.data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 25,
          paddingRight: RIGHT_OFFSET - MARGIN_RIGHT - 25,
        }}
        decelerationRate={0}
        snapToInterval={
          Dimensions.get('window').width - (RIGHT_OFFSET - MARGIN_RIGHT)
        }
        snapToAlignment={'start'}
        onViewableItemsChanged={_onViewableItemsChanged.current}
        viewabilityConfig={{ itemVisiblePercentThreshold: 60 }}
        renderItem={({ item }) => (
          <ImageCard
            item={item}
            navigation={navigation}
            key={item.id.toString()}
            RIGHT_OFFSET={RIGHT_OFFSET}
            MARGIN_RIGHT={MARGIN_RIGHT}
          />
        )}
      />
    </View>
  );
};

export default Home;
