import React from 'react';
import { View, Text } from 'react-native';

import ApiContainer from './App/Screens/ApiContainer';
import DetailsContainer from './App/Screens/details/DetailsContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <>
        <ApiContainer />
      </>  
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId } = route.params;
 
  return (
    <>
    <DetailsContainer />
  </>  
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;