import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/Auth/LoginScreen";
import {HomeScreen} from "./screens/HomeScreen";
import {DetailsScreen} from "./screens/DetailsScreen";
import RegisterScreen from "./screens/Auth/RegisterScreen";
import ConditionScreen from "./screens/Auth/ConditionScreen";
import PolitiqueScreen from "./screens/Auth/PolitiqueScreen";

const Stack = createStackNavigator();


function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{
            title: '',
            headerStyle: {
              backgroundColor: '#FAFAFA',
            }

          }}/>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailsScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Condition" component={ConditionScreen} />
          <Stack.Screen name="Politique" component={PolitiqueScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
