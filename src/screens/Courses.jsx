import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Course from '../api/Course';

const Courses = ({navigation}) => {
  
  const courseCard = ({item}) => {
    return (
    <View style={styles.mainContainer}>
     <View style={styles.courceContainer}>
     <View>
      <Image 
        style={styles.imageStyle}
        source={item.image}
      />
      <Text style={styles.mainHeader}>
        {item.title}
      </Text>
      <Text style={styles.description}>
        {item.description}
      </Text>
     </View>
     <View Style={styles.buttonContainer}>
        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("CourseDetails")}
        >
        <Text style={styles.buttonText}>
        Learn More
        </Text>
        </TouchableOpacity>
      </View>
     </View>
    </View>
    );
  }

  return (
    <FlatList 
      keyExtractor={(item) => item.id}
      data={Course}
      renderItem={courseCard}
    />
  );
}

const styles = StyleSheet.create({
   imageStyle: {
    width: "100%",
    height: undefined,
        aspectRatio: 1,
   },
  mainContainer: {
      paddingHorizontal: 20,
  },
  courceContainer: {
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 22,
    color:"#344055",
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
    fontFamily: "JosefinSans_500Medium",
    textTransform: "uppercase",
  },
  description: {
    fontSize: 16,
    color:"#7d7d7d",
    textAlign: "center",
    fontFamily: "JosefinSans_400Regular",
    lineHeight: 20,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "JosefinSans_500Medium",
    textTransform: "uppercase",
  }
}); 

export default Courses;

