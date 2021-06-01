import * as React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useCallback, useEffect, useState} from "react";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
import Moment from "moment";

const webserivce = require('../WebService/webservice');

export default function DetailsCouponScreen({route, navigation } : {route: any, navigation:any}) {
    const [coupon, setCoupon] = useState({
        dateExpiration: undefined,
        code: undefined
    });
    const {couponid, couponqrcode} = route.params;

    const fetchData = useCallback(() => {
        AsyncStorage.getItem('@userid').then((userid) => {
            if (couponqrcode != null) {
                webserivce.addDiscount(userid, couponqrcode).then((data: any) => {
                    setCoupon(data);
                });
            }
        });
    }, []);

    useEffect( () => {
        fetchData();
    }, [fetchData]);

    return (
        <View style={styles.view}>
            <Text style={styles.title}>
                Votre coupon à été ajouté !
            </Text>
            <Ionicons style={styles.icon} name="md-checkmark-circle" size={75} color="green" />
            <Text style={styles.code}>
                {coupon.code}
            </Text>
            <Text style={styles.expirationDate}>
                Expire le : {Moment(coupon.dateExpiration).format('DD/MM/YYYY')}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    view:{
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 120,
        fontSize: 30,
        color: 'green'
    },
    icon: {
        marginTop: 45
    },
    code: {
        marginTop: 70,
        padding: 10,
        fontSize: 40,
        color: 'white',
        backgroundColor: 'rgba(28, 28, 28, 0.7)',
        borderRadius: 20
    },
    expirationDate: {
        paddingTop: 25,
        fontSize: 16,
    }
})


