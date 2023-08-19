import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Login,Recipe} from "./screens"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation/Tabs'

const Stack=createNativeStackNavigator()

const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown:false
    }} initialRouteName='Login' >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={Tabs} />
      <Stack.Screen  name='Recipe ' component={Recipe} />
      
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  
})