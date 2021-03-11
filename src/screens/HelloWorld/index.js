import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';


import styles from './styles'


export default function HelloWorld({ navigation }) {
    return (
        <View style = { styles.container }>

          <Image
            style = {styles.image}
            source = {{ uri: 'https://github.com/gusttaa.png' }}
          />

          <TouchableOpacity 
            style = {styles.button}
            onPress = { () => navigation.navigate('Start') }>

              <Text style = {styles.text}> Start </Text>

          </TouchableOpacity>
          

        </View>
      );  
}

