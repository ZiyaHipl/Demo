import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import messaging from '@react-native-firebase/messaging';
// import PushNotification from "react-native-push-notification";
import Home from './Src/Home';
import Home2 from './Src/Home2';
import BottomTab from './Src/BottomTab'

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home2"
          component={Home2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;