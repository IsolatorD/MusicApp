import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native'

import { COLORS, FONTS, images, SIZES } from '../constants/'

const Welcome = ({ navigation }) => {

  const handleClick = () => {
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.background}
        resizeMode='cover'
        style={styles.background}
      >
        <View
          style={{
            flex: 1,
            paddingTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          <Image
            source={images.logo}
            resizeMode='contain'
            style={{
              width: SIZES.width / 3,
              height: 100
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: SIZES.padding * 2
          }}
        >
          <Text
            style={{
              ...FONTS.largeTitle,
              color: COLORS.white
            }}
          >
            Let´s Get Started
          </Text>
        </View>
        <View
          style={{
            flex: 4,
            paddingHorizontal: SIZES.padding * 2,
            marginTop: SIZES.margin,
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.white,
              paddingRight: SIZES.padding * 6
            }}
          >
            Enjoy the best music platform from your home, don´t miss out on anything
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={handleClick}
          >
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.white,
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
          <Image
            source={images.girl}
            resizeMode='cover'
            style={styles.girlImage}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  background: {
    width: '100%',
    height: '100%'
  },
  girlImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    // zIndex: -1
  },
  button: {
    zIndex: 1,
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: SIZES.margin
  }
})


export default Welcome