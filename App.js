import { View, Text } from 'react-native';
import React from 'react';
import { SystemBars } from 'react-native-bars';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import WallsList from './src/screens/WallsList'

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: 'Abstract' }}
        />
        <Stack.Screen
          name="WallsList"
          component={WallsList}
          options={({ route }) => ({ headerTitle: route.params.name })}
        />
      </Stack.Navigator>
      <SystemBars animated={true} barStyle="light-content" />
    </View>
  );
};

export default App;
