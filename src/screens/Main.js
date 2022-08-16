import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Home from './Home';
import ProductInfo from './ProductInfo';
import MyCart from './MyCart';
import FavScreen from './FavScreen';

const Stack = () => {
  const Stack = createNativeStackNavigator()

  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ProductInfo' component={ProductInfo} />
        <Stack.Screen name='MyCart' component={MyCart} />
      </Stack.Navigator>
    </Stack.Navigator>
    // </NavigationContainer>
  )
}
// export default Stack

const Main = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      initialRouteName={Stack}
      screenOptions={{
        headerShown: true,
      }}>
      <Tab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='home' color={color} size={size} />
          )
        }} />
      <Tab.Screen name='MyCart' component={MyCart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='cart' color={color} size={size} />
          )
        }} />
      <Tab.Screen name='Favorites' component={FavScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='favorite' color={color} size={size} />
          )
        }} />
    </Tab.Navigator>
  )
}
export default function Navigation() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  )
}