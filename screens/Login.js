import { StyleSheet, Text, View, StatusBar, ImageBackground, TouchableOpacity, Button, TextInput } from 'react-native'
import React, { Component } from 'react'
import { COLORS, SIZES, images, FONTS } from '../constants'
import LinearGradient from "react-native-linear-gradient"
import { useNavigation } from '@react-navigation/native'


const Login = () => {

  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.black
    }} >
      <StatusBar barStyle="light-content" />
      <TopHeader />
      < BottomHeader />

    </View>
  )
}


const TopHeader = () => {
  return (<View style={{
    height: SIZES.height > 700 ? "65%" : "60%"
  }}>
    <ImageBackground
      source={images.loginBackground} style={
        {
          flex: 1,
          justifyContent: 'flex-end'
        }} resizeMode="cover" >
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={[COLORS.transparent, COLORS.black]}
        style={{
          height: 200,
          justifyContent: 'flex-end',
          paddingHorizontal: SIZES.padding

        }} >

        <Text style={{
          width: "80%", color: COLORS.white,
          ...FONTS.largeTitle,
          lineHeight: 45,
          marginBottom:"10%",
        }} >Cooking a Delicious Food Ealisy</Text>
    <View style={{marginBottom:"15%"}}>
    <TextInput
        style={styles.input}
        placeholder='Enter Your Email'
        placeholderTextColor={COLORS.white}
        placeholder="Enter Your E-mail"        
        
      />
      <TextInput
        style={styles.input}
       
        placeholder='Enter Your Password'
        placeholderTextColor={COLORS.white}
        

        
        
      />
    </View>
      


      </LinearGradient>


    </ImageBackground>


  </View>)
}

const BottomHeader = () => {
  const navigationVar = useNavigation()
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
      }}
    >
      <Text style={{
        marginTop: SIZES.radius,
        width: "80%",
        color: COLORS.gray,
        ...FONTS.body3

      }}>Discover more than 1200 food recipe in your hands and cooking it easily!</Text>
      <View style={{marginTop:SIZES.radius}} >
        <CustomButton
          buttonText='Login'
          colors={[COLORS.darkGreen, COLORS.lime]}
          buttonContainerstyle={{
            paddingVertical: 20,
            borderRadius: 14
          }}
          onPress={() => { navigationVar.navigate('Home') }}
        />
        <CustomButton
          buttonText='Signup'
          colors={[]}
          buttonContainerstyle={{
            paddingVertical: 20,
            borderRadius: 20,
            marginTop: SIZES.radius,
            borderColor: COLORS.darkLime,
            borderWidth: 1
          }}
        />




      </View>

    </View>

  )
}

const CustomButton = ({ buttonText, buttonContainerstyle, colors, onPress }) => {

  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress} >
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={colors} style={{ ...buttonContainerstyle }}><Text style={{
          textAlign: 'center',
          color: COLORS.white, ...FONTS.h3
        }} >{buttonText}</Text></LinearGradient>
      </TouchableOpacity>

    )
  }
  return (
    <TouchableOpacity onPress={onPress} style={{ ...buttonContainerstyle }}>
      <Text style={{
        textAlign: 'center',
        color: COLORS.white, ...FONTS.h3
      }} >{buttonText}</Text>
    </TouchableOpacity>
  )

}

export default Login

const styles = StyleSheet.create({
  input: {
    width:'90%',
    padding:10,

    marginVertical:10,
    height:40,
    color:COLORS.white,
    fontSize:15,
    borderBottomWidth:2,
    borderBottomColor:COLORS.white
    
}

});
