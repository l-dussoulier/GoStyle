import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axios from 'axios';
import { StyleSheet,View,Button,TextInput,TouchableOpacity,Text, Alert} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Discount from "../Discounts/discount";

// @ts-ignore
export default function LoginScreen({ navigation }) {



  let state = {
    adressRequest: 'http://192.168.1.78:8080',
    username: '',
    password: '',
    connexion: false,
    textError: ""
  }

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('@id', value)
    } catch (e) {
      // saving error
      console.error(e);
    }
  }


  function testZebi()  {
    console.log("1");
    return 1;
  }



  function _userLog(user: any) {
    state.username = user;
  }


  function _passwordLog(password: any) {
    state.password = password;
  }


  function _mdpOublie() {
    console.log('mot de passe oublié !');

  }

  const requestLogin = async () => {
    try {
      const response =  await axios.post(state.adressRequest+'/Login', {username: state.username, password: state.password});
      if (response.data != "Nom utilisateur ou mot de passe incorrect"){
        state.connexion = true;

      }
    }catch (err){
      console.error(err);
    }
  };



  function _connexion() {
    state.connexion = false;
    var user = state.username;
    var password = state.password;
    requestLogin();
    setTimeout(function(){ // Pas jojo
      if (state.connexion == true){
        navigation.navigate('Home');
        console.log('connecté');
        //getData();
      }
      else{
        Alert.alert("Connexion","Nom d'utilisateur ou mot de passe incorrect ❌");
      }
    }, 1000);

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
            onPress={() => testZebi()} >
          <Text >TDD</Text>
        </TouchableOpacity>


        <Text style={styles.textLogin}>Adresse mail</Text>
        <TextInput onChangeText={(text) => _userLog(text)} style={styles.textinput} placeholder=''/>
        <Text style={styles.textLogin}>Mot de passe</Text>
        <TextInput onChangeText={(text) => _passwordLog(text)} style={styles.textinput} placeholder=''/>
        <TouchableOpacity
          onPress={_mdpOublie}
        >
          <Text style={styles.textOublie}  >Mot de passe oublié ?</Text>
        </TouchableOpacity>

        <Text style={styles.textError}>{state.textError}</Text>
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

