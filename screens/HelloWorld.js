import React from 'react';
import { Button, View, Image, StyleSheet } from 'react-native';

export default function HelloWorld({ navigation }) {
    return (
        <View style = { styles.container }>

          <Image
            style = {{
              width: '70%',
              height: 350,
              borderRadius: 20
            }}

            source = {{
              uri: 'https://github.com/gusttaa.png'
            }}

          />

          <Button
            title = "Start"
            onPress = { () => navigation.navigate('Start') }
            color = '#6272a4'            
          >
          </Button>

        </View>
      );  
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'space-evenly',
    backgroundColor: '#44475a'
  },

})