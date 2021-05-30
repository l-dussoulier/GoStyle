import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet,View,Button,TextInput,TouchableOpacity,Text, ScrollView,SafeAreaView} from "react-native";

// @ts-ignore
export default function PolitiqueScreen({ navigation }) {

    return (
        <View>
            <SafeAreaView style={styles.container}>
                <ScrollView >
                    <Text>

                        <Text style={ styles.titlePage }> DÉCLARATION DE CONFIDENTIALITÉ{ "\n" }{ "\n" }</Text>

                        <Text style={ styles.title }> ARTICLE 1 – RENSEIGNEMENTS PERSONNELS RECUEILLIS{ "\n" }</Text>

                        <Text> { "\n" }Lorsque vous effectuez un achat sur notre boutique, dans le cadre de notre
                            processus d’achat et de vente, nous recueillons les renseignements personnels que vous nous
                            fournissez, tels que votre nom, votre adresse et votre adresse e-mail.

                            Lorsque vous naviguez sur notre boutique, nous recevons également automatiquement l’adresse
                            de protocole Internet (adresse IP) de votre ordinateur, qui nous permet d’obtenir plus de
                            détails au sujet du navigateur et du système d’exploitation que vous utilisez.

                            Marketing par e-mail (le cas échéant): Avec votre permission, nous pourrions vous envoyer
                            des e-mails au sujet de notre boutique, de nouveaux produits et d’autres mises à jour.
                            { "\n" }{ "\n" }</Text>

                        <Text style={ styles.title }>ARTICLE 2 - CONSENTEMENT{ "\n" }</Text>

                        <Text> { "\n" } Comment obtenez-vous mon consentement?

                            Lorsque vous nous fournissez vos renseignements personnels pour conclure une transaction,
                            vérifier votre carte de crédit, passer une commande, planifier une livraison ou retourner un
                            achat, nous présumons que vous consentez à ce que nous recueillions vos renseignements et à
                            ce que nous les utilisions à cette fin uniquement.

                            Si nous vous demandons de nous fournir vos renseignements personnels pour une autre raison,
                            à des fins de marketing par exemple, nous vous demanderons directement votre consentement
                            explicite, ou nous vous donnerons la possibilité de refuser.


                            Comment puis-je retirer mon consentement?

                            Si après nous avoir donné votre consentement, vous changez d’avis et ne consentez plus à ce
                            que nous puissions vous contacter, recueillir vos renseignements ou les divulguer, vous
                            pouvez nous en aviser en nous contactant à contact@gostyle.fr
                            { "\n" }{ "\n" } </Text>

                        <Text style={ styles.title }> ARTICLE 3 – DIVULGATION{ "\n" }</Text>

                        <Text> { "\n" }Nous pouvons divulguer vos renseignements personnels si la loi nous oblige à le
                            faire ou si vous violez nos Conditions Générales de Vente et d’Utilisation.{ "\n" }</Text>


                        <Text style={ styles.title }>{ "\n" }ARTICLE 5 – SERVICES FOURNIS PAR DES TIERS{ "\n" }</Text>

                        <Text>{ "\n" }
                            De manière générale, les fournisseurs tiers que nous utilisons vont uniquement recueillir,
                            utiliser et divulguer vos renseignements dans la mesure du nécessaire pour pouvoir réaliser
                            les services qu’ils nous fournissent.

                            Cependant, certains tiers fournisseurs de services, comme les passerelles de paiement et
                            autres processeurs de transactions de paiement, possèdent leurs propres politiques de
                            confidentialité quant aux renseignements que nous sommes tenus de leur fournir pour vos
                            transactions d’achat.

                            En ce qui concerne ces fournisseurs, nous vous recommandons de lire attentivement leurs
                            politiques de confidentialité pour que vous puissiez comprendre la manière dont ils
                            traiteront vos renseignements personnels.

                            Il ne faut pas oublier que certains fournisseurs peuvent être situés ou avoir des
                            installations situées dans une juridiction différente de la vôtre ou de la nôtre. Donc si
                            vous décidez de poursuivre une transaction qui requiert les services d’un fournisseur tiers,
                            vos renseignements pourraient alors être régis par les lois de la juridiction dans laquelle
                            ce fournisseur se situe ou celles de la juridiction dans laquelle ses installations sont
                            situées.

                            À titre d’exemple, si vous êtes situé au Canada et que votre transaction est traitée par une
                            passerelle de paiement située aux États-Unis, les renseignements vous appartenant qui ont
                            été utilisés pour conclure la transaction pourraient être divulgués en vertu de la
                            législation des États-Unis, y compris le Patriot Act.

                            Une fois que vous quittez le site de notre boutique ou que vous êtes redirigé vers le site
                            web ou l’application d’un tiers, vous n’êtes plus régi par la présente Politique de
                            Confidentialité ni par les Conditions Générales de Vente et d’Utilisation de notre site web.


                            Liens

                            Vous pourriez être amené à quitter notre site web en cliquant sur certains liens présents
                            sur notre site. Nous n’assumons aucune responsabilité quant aux pratiques de confidentialité
                            exercées par ces autres sites et vous recommandons de lire attentivement leurs politiques de
                            confidentialité.
                            { "\n" }</Text>

                        <Text style={ styles.title }>{ "\n" }ARTICLE 6 – SÉCURITÉ{ "\n" }</Text>
                        <Text>{ "\n" }
                            Pour protéger vos données personnelles, nous prenons des précautions raisonnables et suivons
                            les meilleures pratiques de l’industrie pour nous assurer qu’elles ne soient pas perdues,
                            détournées, consultées, divulguées, modifiées ou détruites de manière inappropriée.

                            Si vous nous fournissez vos informations de carte de crédit, elles seront chiffrées par le
                            biais de l’utilisation du protocole de sécurisation SSL et conservées avec un chiffrement de
                            type AES-256. Bien qu’aucune méthode de transmission sur Internet ou de stockage
                            électronique ne soit sûre à 100 %, nous suivons toutes les exigences de la norme PCI-DSS et
                            mettons en œuvre des normes supplémentaires généralement reconnues par l’industrie.
                            { "\n" } </Text>
                        <Text style={ styles.title }>{ "\n" }ARTICLE 7 – CONSENTEMENT{ "\n" }</Text>
                        <Text>{ "\n" }
                            En utilisant ce site, vous déclarez que vous avez au moins l’âge de la majorité dans votre
                            État ou province de résidence, et que vous nous avez donné votre consentement pour permettre
                            à toute personne d’âge mineur à votre charge d’utiliser ce site web.
                            { "\n" } </Text>

                        <Text style={ styles.title }>{ "\n" }ARTICLE 8 – MODIFICATIONS APPORTÉES À LA PRÉSENTE POLITIQUE
                            DE CONFIDENTIALITÉ{ "\n" }</Text>
                        <Text>{ "\n" }
                            Nous nous réservons le droit de modifier la présente politique de confidentialité à tout
                            moment, donc veuillez s’il vous plait la consulter fréquemment. Les changements et les
                            clarifications prendront effet immédiatement après leur publication sur le site web. Si nous
                            apportons des changements au contenu de cette politique, nous vous aviserons ici qu’elle a
                            été mise à jour, pour que vous sachiez quels renseignements nous recueillons, la manière
                            dont nous les utilisons, et dans quelles circonstances nous les divulguons, s’il y a lieu de
                            le faire.

                            Si notre boutique fait l’objet d’une acquisition par ou d’une fusion avec une autre
                            entreprise, vos renseignements pourraient être transférés aux nouveaux propriétaires pour
                            que nous puissions continuer à vous vendre des produits.
                            { "\n" }</Text>

                        <Text style={ styles.title }>{ "\n" }QUESTIONS ET COORDONNÉES{ "\n" }</Text>
                        <Text>{ "\n" }
                            Si vous souhaitez: accéder à, corriger, modifier ou supprimer toute information personnelle
                            que nous avons à votre sujet, déposer une plainte, ou si vous souhaitez simplement avoir
                            plus d’informations, contactez notre agent responsable des normes de confidentialité à
                            contact@gostyle.fr
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

})

