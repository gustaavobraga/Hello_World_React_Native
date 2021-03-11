import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HelloWorld from './src/screens/HelloWorld';
import Start from './src/screens/Start';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HelloWorld">
        <Stack.Screen 
          name="Hello World" 
          component={HelloWorld} 
          options = {{
            headerStyle: {
              backgroundColor: '#8be9fd',
            },

            headerTintColor: '#f8f8f2',

            headerTitleStyle : { 
              fontWeight : 'bold', 
              fontSize:25,
            },
          }}
        />

        <Stack.Screen 
          name="Start" 
          component={Start} 
          options = {{
            headerStyle: {
              backgroundColor: '#8be9fd',
            },

            headerTintColor: '#f8f8f2',

            headerTitleStyle : { 
              fontWeight : 'bold', 
              fontSize:25,
            },

          }}  
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
