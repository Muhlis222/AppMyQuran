import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Beranda from './component/Beranda';
import Detail from './component/Detail';
import SplashScreen from './component/SplashScreen';
import Home from './component/Home';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen name="Beranda" component={Beranda} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={Detail} options={{
          headerShown: true, headerTitle: 'Back', headerStyle: {
            backgroundColor: '#708090'
          },
          headerTintColor: 'white'
        }} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})