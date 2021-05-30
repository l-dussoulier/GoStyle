import React, {useState} from 'react';
import { StyleSheet,View,TextInput,TouchableOpacity,Text, Alert} from "react-native";

const webservice = require('../../WebService/webservice')

export default function LoginScreen({ navigation } : {navigation:any}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function _connexion() {
    const response = await webservice.login(username, password);
    if (response.status) {
      navigation.navigate('Home');
    } else {
      console.log(response.status);
      Alert.alert(response.message);
    }
  }

  return (
    <View style={styles.main_container}>

      <Text style={styles.name}>GoStyle</Text>

      <View style={styles.viewInputs}>

        <Text style={styles.textLogin}>Utilisateur</Text>
        <TextInput onChangeText={(text) => setUsername(text)} nativeID={"user"} style={styles.textinput} placeholder=''/>
        <Text style={styles.textLogin}>Mot de passe</Text>
        <TextInput onChangeText={(text) => setPassword(text)} nativeID={"password"} secureTextEntry={true} style={styles.textinput} placeholder=''/>

      </View>
      <View style={{flex : 2}}>

        <Text style={[styles.text]}>En utilisant GoStyle vous confirmez être en accord avec nos
          <Text style={[styles.textUnderLine]} onPress={() => navigation.navigate('Condition')} nativeID={"condition"}> conditions d’utilisation </Text>
          et notre
          <Text style={[styles.textUnderLine]} onPress={() => navigation.navigate('Politique')} nativeID={"politique"}> politique de confidentialité</Text>
        </Text>

        <TouchableOpacity
          style={[styles.textinput, styles.buttonValide]}
          onPress={() => _connexion()} >
          <Text style={styles.textButton} nativeID={"connexion"}>Se connecter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.textinput, styles.buttonValide]}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textButton} nativeID={"register"}>S'inscire</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 100,
    paddingLeft : 30,
    paddingRight: 30,
    flex : 1
  },
  name: {
    fontSize: 50,
    textAlign: "center"
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
    flex: 6,
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
    textAlign : "center",
  },
  textUnderLine : {
    textDecorationLine: 'underline',
  },
  textError: {
    color: '#FE5A36',
  }

})

