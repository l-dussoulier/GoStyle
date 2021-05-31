import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/Auth/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
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
            headerShown: false,
            headerStyle: {
              backgroundColor: '#FAFAFA',
            }

          }}/>
          <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Liste des réductions'}}/>
          <Stack.Screen name="Detail" component={DetailsScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Condition" component={ConditionScreen} options={{title: "Condition d'/utilisation"}} />
          <Stack.Screen name="Politique" component={PolitiqueScreen} options={{title: 'Politique de confidentialité'}}/>
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
