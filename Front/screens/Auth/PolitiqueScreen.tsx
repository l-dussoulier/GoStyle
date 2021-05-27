import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet,View,Button,TextInput,TouchableOpacity,Text} from "react-native";

// @ts-ignore
export default function PolitiqueScreen({ navigation }) {

    return (
        <View style={styles.main_container}>
            <Text>Politique de confidentialité</Text>
        </View>

    )

}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 50,
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
        textAlign : "center",
    },
    textUnderLine : {
        textDecorationLine: 'underline',
    }

})

