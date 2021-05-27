import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {StyleSheet, View, Button, TextInput, TouchableOpacity, Text, Alert} from "react-native";
import axios from "axios";

const webservice = require('../../WebService/webservice')
// @ts-ignore
export default function RegisterScreen({ navigation }) {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');


 async function _register() {
   if (password == password2) {
     const user = await webservice.register(username, password);
     if (user == null) {
       Alert.alert("Erreur survenue ❌");
     } else {
       navigation.navigate('Login');
     }

   }else {
     Alert.alert("Les deux mots de passe sont différents");
   }
 }

  function _condition(){
    navigation.navigate('Condition');
  }

  function _politique(){
    navigation.navigate('Politique');
  }



  return (
    <View style={styles.main_container}>
      <View style={styles.viewInputs}>
        <Text style={styles.textLogin}>Username</Text>
        <TextInput onChangeText={(text) => setUsername(text)} style={styles.textinput} placeholder='Utilisateur'/>

        <Text style={styles.textLogin}>Mot de passe</Text>
        <TextInput onChangeText={(text) => setPassword(text)} style={styles.textinput} placeholder='Mot de passe'/>

        <Text style={styles.textLogin}>Confirmation mot de passe</Text>
        <TextInput onChangeText={(text) => setPassword2(text)} style={styles.textinput} placeholder='confirmation mot de passe'/>

      </View>
      <View style={{flex : 2}}>
        <Text style={[styles.text]}>En utilisant RiderZ vous confirmez être en accord avec nos
          <Text style={[styles.textUnderLine]} onPress={() => _condition()}> conditions d’utilisation</Text>
          et notre
          <Text style={[styles.textUnderLine]} onPress={() => _politique()}> politique de confidentialité</Text>
        </Text>

        <TouchableOpacity
          style={[styles.textinput, styles.buttonValide]}
          onPress={() => _register()}

        >
          <Text style={styles.textButton}>S'enregistrer</Text>
        </TouchableOpacity>
      </View>
    </View>

  )

}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 20,
    paddingLeft : 30,
    paddingRight: 30,
    flex : 1
  },
  textinput: {
    paddingLeft: 80,
    paddingRight: 80,
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#FBFBFB',
    borderRadius : 10
  },
  viewInputs: {
    flex: 8,
    justifyContent: 'center',

  },
  buttonValide: {

    backgroundColor: '#2E2E41',

  },
  textLogin : {
    marginBottom: 5,
    marginTop : 10

  },
  textButton : {
    color : '#FFFFFF',
    textAlign : 'center'
  }
  ,
  textOublie : {
    marginTop: 5,
    fontSize: 11,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  text : {
    fontSize: 11,
    textAlign: "center"
  },
  textUnderLine : {
    textDecorationLine: 'underline',
  }

})

