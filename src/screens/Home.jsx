import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import Manu from '../component/Manu';

const Home = (props) => {
  const description = "Picture of Boy working on his laptop with a book lying open on the table stock photo, images and stock photography. Image 42381293.";

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}> 
      <Image style={styles.headerImage}
      resizeMode='contain'
      source={require("../../assets/himage.jpg")}
      />
      <Text style={styles.mainHeader}>Welcome to</Text>
      <Text style={[styles.mainHeader, {
        fontSize: 33,
        color: "#4c5dab",
        marginTop: 0,
      }]}>{props.chanelName}</Text>
      <Text style={styles.paraStyle}>{description}</Text>
      </View>
 
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Manu />
        <View style={[styles.lineStyle, {
          marginVertical: 10,
        }]}></View>
      </View>

    </View>
  );
}



const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  homeTop: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    paddingHorizontal: 10,
  },
  headerImage: {
   height: undefined,
   width: "100%",
   aspectRatio: 1,
   display: "flex",
   alignItems:"stretch",
   marginTop: 50,
   borderRadius: 20,
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    fontFamily: "JosefinSans_500Medium",
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    lineHeight: 26,
    color: "#7d7d7d",
    marginTop: 30,
    marginBottom: 30,
    fontFamily: "JosefinSans_400Regular",
  },
  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  }
});

export default Home;
