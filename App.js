import { View, Image, Pressable } from 'react-native';
import React from 'react';
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
            headerTransparent: 'true',
            headerTitleStyle: {
              fontSize: 22,
              fontFamily: 'Segoe UI',
              letterSpacing: 0.5,
              color: '#fff',
            },
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate('About')}>
                <Image
                  style={{ height: 22, width: 22, marginRight: 15 }}
                  source={{
                    uri: 'https://www.iconsdb.com/icons/preview/white/info-2-xxl.png',
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
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default App;
