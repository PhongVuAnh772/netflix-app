import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TabHomeScreen from './src/components/screens/HomeScreen.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import SignInScreen from './src/auth/screens/SignInScreen.js';

function App(): JSX.Element {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={TabHomeScreen}
              initialParams={{isSignedIn}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Auth"
              component={SignInScreen}
              initialParams={{isSignedIn, setIsSignedIn}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
