import React from 'react'
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { COLORS, FONTS, icons, images, SIZES } from '../constants'

const Login = ({ navigation }) => {

  const handleClick = () => {
    navigation.navigate('Home')
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
            justifyContent: 'flex-end',
            paddingHorizontal: SIZES.padding
          }}
        >
          <Image
            source={images.logoIcon}
            resizeMode='contain'
            style={{
              width: 60,
              height: 60
            }}
          />
        </View>
        <Image
          source={images.polygon}
          resizeMode='cover'
          style={{
            position: 'absolute',
            right: 0,
            top: 50
          }}
        />
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
            paddingTop: SIZES.padding * 2
          }}
        >
          <Text
            style={{
              ...FONTS.largeTitle,
              color: COLORS.white
            }}
          >
            Sign up
          </Text>
          <Text
            style={{
              ...FONTS.body2,
              color: COLORS.white
            }}
          >
            to start play
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.padding
          }}
        >
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.white,
              marginBottom: SIZES.base
            }}
          >
            Phone Number
          </Text>
          <TextInput
            placeholder='Your phone number'
            placeholderTextColor={COLORS.transparentWhite}
            style={{
              color: COLORS.white,
              width: '100%',
              height: 50,
              borderColor: COLORS.primary,
              borderRadius: 5,
              borderWidth: 2
            }}
          />
        </View>
        <View
          style={{
            flex: 2,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <TouchableOpacity
            style={{
              width: SIZES.width / 2,
              height: 70,
              backgroundColor: COLORS.lightBlue,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={handleClick}
          >
            <Image
              source={icons.backArrow}
              resizeMode='contain'
              style={{
                width: 40,
                height: 40,
                transform: [
                  { rotateY: '180deg' }
                ]
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.white,
              paddingTop: SIZES.padding
            }}
          >
            Or Sign In
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black
  },
  background: {
    width: '100%',
    height: '100%'
  }
})

export default Login