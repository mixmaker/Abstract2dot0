import { ScrollView, Dimensions, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchHomeData } from '../api';
import ImageCard from '../components/ImageCard';

const Home = ({ navigation }) => {
  const [homeData, setHomeData] = useState();
  const MARGIN_RIGHT = 30;
  const RIGHT_OFFSET = 100;
  const loadApp = async () => {
    const data = await fetchHomeData();
    setHomeData(data);
  };
  useEffect(() => {
    loadApp();
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingLeft: 25,
        paddingRight: RIGHT_OFFSET - MARGIN_RIGHT,
      }}
      decelerationRate={100}
      snapToInterval={
        Dimensions.get('window').width - (RIGHT_OFFSET - MARGIN_RIGHT)
      }
      snapToAlignment={'start'}>
      {homeData &&
        homeData.data.map(item => (
          <ImageCard
            item={item}
            navigation={navigation}
            key={item.id.toString()}
            RIGHT_OFFSET={RIGHT_OFFSET}
            MARGIN_RIGHT={MARGIN_RIGHT}
          />
        ))}
    </ScrollView>
  );
};

export default Home;
