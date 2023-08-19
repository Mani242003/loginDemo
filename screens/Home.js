import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const Home = () => {
  return (
   <SafeAreaView
   style={{
    flex:1,
    backgroundColor:COLORS.white
  }}
   >
    <Text>Home</Text>
   </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})