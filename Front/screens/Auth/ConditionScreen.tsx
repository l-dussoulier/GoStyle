import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView} from "react-native";

export default function ConditionScreen() {
    return (
        <View>
            <SafeAreaView style={styles.container}>
                <ScrollView >
                    <Text>
                        <Text style={ styles.title }>{ "\n" }ARTICLE 2 – CONDITIONS GÉNÉRALES{ "\n" }</Text>
                        <Text>
                            { "\n" }
                            Nous nous réservons le droit de refuser à tout moment l’accès aux services à toute personne, et ce, pour quelque raison que ce soit.
                            Vous comprenez que votre contenu (à l’exclusion de vos informations de carte de crédit) pourrait être transféré de manière non chiffrée,
                            et cela sous-entend (a) des transmissions sur divers réseaux; et (b) des changements pour se conformer et s’adapter aux exigences techniques
                            pour la connexion des réseaux ou appareils. Les informations de carte de crédit sont toujours chiffrées pendant la transmission sur les réseaux.
                            Vous acceptez de ne pas reproduire, dupliquer, copier, vendre, revendre ou exploiter une quelconque partie du Service ou utilisation du Service,
                            ou un quelconque accès au Service ou contact sur le site web, par le biais duquel le Service est fourni, sans autorisation écrite expresse préalable
                            de notre part.
                            { "\n" }
                        </Text>

                    </Text>
                </ScrollView>
            </SafeAreaView>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    title:{
        fontSize : 20,
    },
    titlePage:{
        textAlign: 'center',
        fontSize : 20
    }
});