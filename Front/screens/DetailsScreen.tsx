import {Button, Text, View} from "react-native";
import * as React from "react";

// @ts-ignore
export function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Première page" onPress={() => navigation.popToTop()} />
      <Button title="Retour" onPress={() => navigation.goBack()} />


    </View>
  );
}
