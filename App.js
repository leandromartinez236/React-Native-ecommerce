import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/screens/Home';
import ProductInfo from './src/screens/ProductInfo';
import MyCart from './src/screens/MyCart';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FavScreen from './src/screens/FavScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Provider } from 'react-redux';
import store from './src/redux/store';


const HomeStack = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='ProductInfo' component={ProductInfo} />
    </Stack.Navigator>
  )
}
const Main = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarActiveBackgroundColor: '#5118afb8',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false
      }}>
      <Tab.Screen name='Home' component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='home' color={color} size={23} />
          )
        }} />
      <Tab.Screen name='My Cart' component={MyCart}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='cart' color={color} size={23} />
          )
        }} />
      <Tab.Screen name='Favorites' component={FavScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='favorite' color={color} size={23} />
          )
        }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}


