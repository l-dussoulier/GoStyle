import React, {useState} from 'react';
import { StyleSheet,View,TextInput,TouchableOpacity,Text, Alert} from "react-native";

const webservice = require('../../WebService/webservice')

export default function LoginScreen({ navigation } : {navigation:any}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let textError = '';

  function _mdpOublie() {
    console.log('mot de passe oublié !');
  }

  async function _connexion() {
    const user = await webservice.login(username, password);

    if (user == null) {
      Alert.alert("Connexion","Nom d'utilisateur ou mot de passe incorrect ❌");
    } else {
      navigation.navigate('Home');
      //getData();
    }
  }

  function _register() {
    navigation.navigate('Register');
  }


  return (
    <View style={styles.main_container}>
      <Text style={styles.name}>GoStyle</Text>
      <View style={styles.viewInputs}>
        <TouchableOpacity
            style={[styles.textinput, styles.buttonValide]}
        >
          <Text >TDD</Text>
        </TouchableOpacity>


        <Text style={styles.textLogin}>Adresse mail</Text>
        <TextInput onChangeText={(text) => setUsername(text)} style={styles.textinput} placeholder=''/>
        <Text style={styles.textLogin}>Mot de passe</Text>
        <TextInput onChangeText={(text) => setPassword(text)} style={styles.textinput} placeholder=''/>
        <TouchableOpacity
          onPress={_mdpOublie}
        >
          <Text style={styles.textOublie}  >Mot de passe oublié ?</Text>
        </TouchableOpacity>

        <Text style={styles.textError}>{textError}</Text>
      </View>
      <View style={{flex : 2}}>
        <Text style={[styles.text]}>En utilisant GoStyle vous confirmez être en accord avec nos
          <Text style={[styles.textUnderLine]}> conditions d’utilisation</Text>
          et notre
          <Text style={[styles.textUnderLine]}> politique de confidentialité</Text>
        </Text>

        <TouchableOpacity
          style={[styles.textinput, styles.buttonValide]}
          onPress={() => _connexion()} >
          <Text style={styles.textButton}>Se connecter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.textinput, styles.buttonValide]}
          onPress={() => _register()}>
          <Text style={styles.textButton}>S'inscire</Text>
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
  name: {
    fontSize: 50,
    textAlign: "center"
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

