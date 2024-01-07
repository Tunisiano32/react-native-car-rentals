/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/screens/home.screen';
import Map from './src/screens/map.screen';
import Saved from './src/screens/saved.screen';
import Settings from './src/screens/settings.screen';
import Info from './src/screens/info.screen';
import Header from './src/components/header';
import FavoritesContextProvider from './src/context/favorite.context';

const homeIcon_active = require('./src/assets/icons/home-active.png');
const homeIcon = require('./src/assets/icons/home.png');
const compass = require('./src/assets/icons/compass.png');
const compass_active = require('./src/assets/icons/compass-active.png');
const savedIcon = require('./src/assets/icons/saved.png');
const savedIcon_active = require('./src/assets/icons/saved-active.png');
const settingsIcon = require('./src/assets/icons/settings.png');
const settingsIcon_active = require('./src/assets/icons/settings-active.png');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Initial" component={Home} />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <FavoritesContextProvider>
      <SafeAreaView style={styles.safeArea}>
        <Header />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              headerShown: false,
              tabBarIcon: ({focused}) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused ? homeIcon_active : homeIcon;
                } else if (route.name === 'Map') {
                  iconName = focused ? compass_active : compass;
                } else if (route.name === 'Saved') {
                  iconName = focused ? savedIcon_active : savedIcon;
                } else if (route.name === 'Settings') {
                  iconName = focused ? settingsIcon_active : settingsIcon;
                }
                return (
                  <Image
                    source={iconName}
                    resizeMode="contain"
                    style={styles.footerIcon}
                  />
                );
              },
              tabBarShowLabel: false,
              tabBarStyle: {
                position: 'absolute',
                backgroundColor: 'black',
                borderTopStartRadius: 40,
                borderTopEndRadius: 40,
                padding: 10,
              },
            })}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Saved" component={Saved} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </FavoritesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIcon: {
    width: 25,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
});

export default App;
