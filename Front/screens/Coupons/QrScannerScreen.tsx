import * as React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useCallback, useEffect, useState} from "react";
import {Button, FlatList, StatusBar, StyleSheet, View, Text} from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';

const webserivce = require('../../webservice/webservice');
// @ts-ignore

export default function QrScannerScreen({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            // @ts-ignore
            setHasPermission(status === 'granted');
        })();
    }, []);

    // @ts-ignore
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        navigation.navigate('DetailsCoupon', {couponid: null, couponqrcode: data});
    };

    if (hasPermission === null) {
        return <Text>Demande de permission pour l'usage de la caméra</Text>;
    }
    if (hasPermission === false) {
        return <Text>Accès refusé à la caméra</Text>;
    }

    return (
        <View style={styles.view}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view:{
        marginTop: 10,
        flex: 1
    },
})



