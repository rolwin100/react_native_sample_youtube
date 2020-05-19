import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import VideoPlayScreen from '../screens/VideoPlay'
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Video Play">
        <Stack.Screen name="YoutubeVideo" options={{ title: 'Youtube Video' }} component={HomeScreen} />
        <Stack.Screen name="VideoPlay"  options={{ title: 'Youtube Video' }} component={VideoPlayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;