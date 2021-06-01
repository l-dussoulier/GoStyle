import React, {useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Alert} from "react-native";

const webservice = require('../../webService/webservice')

export default function RegisterScreen({ navigation } : {navigation:any}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

 async function _register() {
   if (password != password2) {
     Alert.alert("Inscription", "Les deux mots de passe sont différents");
   } else {
     const response = await webservice.signup(username, password);
     if (response.status) {
       navigation.navigate('Home');
     } else {
       Alert.alert(response.message);
     }
   }
 }


  return (
    <View style={styles.main_container}>
      <View style={styles.viewInputs}>
        <Text style={styles.textLogin}>Utilisateur</Text>
        <TextInput onChangeText={(text) => setUsername(text)} style={styles.textinput} nativeID={"userRegister"} placeholder='Utilisateur'/>

        <Text style={styles.textLogin}>Mot de passe</Text>
        <TextInput onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={styles.textinput} nativeID={"passwordRegister"} placeholder='Mot de passe'/>

        <Text style={styles.textLogin}>Confirmation mot de passe</Text>
        <TextInput onChangeText={(text) => setPassword2(text)} secureTextEntry={true} style={styles.textinput} nativeID={"password2Register"} placeholder='Confirmation mot de passe'/>

      </View>
      <View style={{flex : 2}}>
        <Text style={[styles.text]}>En utilisant GoStyle vous confirmez être en accord avec nos
          <Text style={[styles.textUnderLine]} onPress={() => navigation.navigate('Condition')}> conditions d’utilisation </Text>
          et notre
          <Text style={[styles.textUnderLine]} onPress={() => navigation.navigate('Politique')}> politique de confidentialité</Text>
        </Text>

        <TouchableOpacity style={[styles.textinput, styles.buttonValide]} onPress={() => _register()} >
          <Text style={styles.textButton} nativeID={"inscription"} >S'inscrire</Text>
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
    paddingLeft: 10,
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

    backgroundColor: '#93A09D',

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

