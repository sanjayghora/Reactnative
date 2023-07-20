import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useState }  from 'react';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_300Light,
  
} from '@expo-google-fonts/josefin-sans';

import {
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';


const Contact = ({navigation}) => {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[phone, setPhone] = useState("");
  const[message, setMessage] = useState("");
  const [isChecked, setChecked] = useState(false);

  const submit = () => {
    if(!name && !email && !phone && !message) {
      Alert.alert("plzz fill the all value");
    } else {
      Alert.alert(`thank you ${name}`);
      navigation.navigate("Home");
    }
  } 

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  Nunito_600SemiBold,
  Nunito_700Bold,
  JosefinSans_300Light,
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level up your Knowledge</Text>
      <Text style={styles.description}>Musk is the wealthiest person in the world with an estimated </Text>
      
      <View style={styles.inputContainer}>
      <Text style={styles.lables}>Enter your name</Text>
      <TextInput style={styles.inputStyle} placeholder={"your name"}
        value={name}
        onChangeText={(userData) => setName(userData)}
      />
      </View>

      <View style={styles.inputContainer}>
      <Text style={styles.lables}>Enter your email</Text>
      <TextInput style={styles.inputStyle} placeholder={"your email"}
        value={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      </View>

      <View style={styles.inputContainer}>
      <Text style={styles.lables}>Enter mobile number</Text>
      <TextInput style={styles.inputStyle} 
      placeholder={"mobile number"}
        value={phone}
        onChangeText={(userNo) => setPhone(userNo)}
      />
      </View>

      <View style={styles.inputContainer}>
      <Text style={styles.description}>Descriptin</Text>
      <TextInput style={[styles.inputStyle, styles.multiineStyle]} 
        placeholder={"Tell us about your self..."}
        numberOfLines={5}
        value={message}
        onChangeText={(userMessage) => setMessage(userMessage)}
      />
      </View>
      
      {/* checkbox */}
      <View style={styles.wrapper}>
        <Checkbox 
          value={isChecked}
          onValueChange={() => setChecked(!isChecked)}
          color={isChecked ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>
          I agree to the terms and conditions
        </Text>
      </View>
     
     {/* submit button */}

     <TouchableOpacity
     style={[styles.buttonStyle,
     {
      backgroundColor: isChecked ? "#4630EB" : "grey", 
     }]} 
     disabled={!isChecked}
     onPress={submit}
     >
      <Text style={styles.buttonText}>Contact Us</Text>
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "JosefinSans_300Light",
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },
  lables: {
    fontWeight: "bold",
    // fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "JosefinSans_300Light",
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multiineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    fontFamily: "JosefinSans_300Light",
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
    fontFamily: "JosefinSans_300Light",
  },
});

export default Contact;

