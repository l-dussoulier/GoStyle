import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/Auth/LoginScreen";
import HomeScreen from "./screens/Commons/HomeScreen";
import RegisterScreen from "./screens/Auth/RegisterScreen";
import ConditionScreen from "./screens/Auth/ConditionScreen";
import PolitiqueScreen from "./screens/Auth/PolitiqueScreen";
import QrScannerScreen from "./screens/Coupons/QrScannerScreen";
import DetailsCouponScreen from "./screens/Coupons/DetailsCouponScreen";
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HeaderBackButton } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {

  async function _logout(navigation) {
    await AsyncStorage.removeItem('@userid');
    navigation.navigate('Login');
  }

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={HomeScreen} options={({navigation}) => ({
            title: 'Liste des réductions',
            headerLeft: () => null,
            headerRight: ({}) => (
                <Feather name="log-out" style={[styles.logout]} size={24} color="black" onPress={() => _logout(navigation)} />
            )
          })}/>
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Condition" component={ConditionScreen} options={{title: 'Condition d\'utilisation'}} />
          <Stack.Screen name="Politique" component={PolitiqueScreen} options={{title: 'Politique de confidentialité'}}/>
          <Stack.Screen name="QrScanner" component={QrScannerScreen} options={{title: 'Scannez votre QrCode' }}/>
          <Stack.Screen name="DetailsCoupon" component={DetailsCouponScreen} options={({navigation}) => ({
            title: '',
            headerLeft: (props) => (
                <HeaderBackButton
                    {...props}
                    onPress={() => {
                      navigation.navigate('Home');
                    }}
                />
            )
          })}/>

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
  logout: {
    paddingRight: 10
  }
});
