import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Manu = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={() => navigation.navigate('Courses')}
      >
      <Image
       style={styles.iconStyle}
      source={{uri: "https://img.icons8.com/stickers/100/training.png",}}
      />
      </TouchableOpacity>
      
      <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={() => navigation.navigate('Student')}
      >
        <Image
       style={styles.iconStyle}
      source={{uri: "https://img.icons8.com/color/48/student-male--v1.png",}}
      />
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={() => navigation.navigate('About Us')}
      >
        <Image
       style={styles.iconStyle}
      source={{uri: "https://img.icons8.com/color/48/info-squared.png",}}
      />
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={() => navigation.navigate('Contact')}
      >
        <Image
       style={styles.iconStyle}
      source={{uri: "https://img.icons8.com/pulsar-line/48/user.png",}}
      />
      </TouchableOpacity>

    </View>
  )
}

export default Manu;

const styles = StyleSheet.create({
    menuContainer: {
            // flex: 1,
            flexDirection: 'row',
            justifyContent:'space-around',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 0
        },
        // buttonStyle: {
        //     width: 150,
        //     height: 50,
        //     backgroundColor: '#000000',
        //     borderRadius: 10,
        //     justifyContent: 'center',
        //     alignItems: 'center'
        // }

        iconStyle: {
          width: "100%",
          height: 50,
          aspectRatio: 1,
        },
});