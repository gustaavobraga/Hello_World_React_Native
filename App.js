import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HelloWorld from './screens/HelloWorld';
import Start from './screens/Start';


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
              backgroundColor: '#bd93f9',
            },
            headerTintColor: '#f8f8f2',
          }}
        />

        <Stack.Screen name="Start" component={Start} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
