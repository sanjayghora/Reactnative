import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
} from '@expo-google-fonts/josefin-sans';

import {
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

const About = () => {
  
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  Nunito_600SemiBold,
  Nunito_700Bold,
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.aboutContainer}> 
      <Text style={styles.mainHeader}>SANJAY GHORA</Text>
      <Text   style={styles.paraStyle}>I am a fullStack devloper 🥰</Text>

      <View>
      <Image style={styles.imgStyle}
        source={require('../../assets/profile.jpg')}
      />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}>About Me</Text>
        <Text style={styles.aboutPara}>Elon Reeve Musk is a business magnate and investor. 
        He is the founder, CEO, and chief engineer of SpaceX; angel investor, CEO and product
        architect of Tesla, Inc.; owner and CTO of Twitter; founder of the Boring Company; co-founder of 
        Neuralink and OpenAI; and president of the philanthropic Musk Foundatio</Text>
      </View>
      
      <Text style={styles.mainHeader}>Follow me on Social Network</Text>
      
      <View style={styles.menuContainer}>
      <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() => Linking.openURL("https://www.youtube.com/watch?v=-H6W6JQQjik&ab_channel=MusicJammer")}
      >
        <Image style={styles.iconStyle}
          source={{uri:"https://cdn-icons-png.flaticon.com/512/2111/2111463.png"}}
        />
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
            )
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
            }}
          />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://discord.gg/AN8ThRBXtY")}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
            }}
          />
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 50,
    marginBottom: 10,
    // fontFamily: "bold",
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "JosefinSans_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
    paddingBottom: 30,
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default About;

