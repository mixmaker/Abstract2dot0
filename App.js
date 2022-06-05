import { View, Image, Pressable } from 'react-native';
import React from 'react';
import { SystemBars } from 'react-native-bars';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Home from './src/screens/Home';
import WallsList from './src/screens/WallsList';
import Wallpaper from './src/screens/Wallpaper';
import About from './src/screens/About';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerTitle: 'Abstract',
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate('About')}>
                <Image
                  style={{ height: 22, width: 22, marginRight: 15 }}
                  source={{
                    uri: 'https://www.iconsdb.com/icons/preview/color/C9C9C9/info-2-xxl.png',
                  }}
                />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerLeft: null,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="WallsList"
          component={WallsList}
          options={({ route }) => ({
            headerTitle: route.params.name,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          })}
        />
        <Stack.Screen
          name="Wallpaper"
          component={Wallpaper}
          options={({ route }) => ({
            headerShown: false,
            headerTitle: route.params.name,
            headerTransparent: true,
            // headerStyle: { backgroundColor: '#fbfbfb29' },
          })}
        />
      </Stack.Navigator>
      <SystemBars animated={true} barStyle="light-content" />
    </View>
  );
};

export default App;
