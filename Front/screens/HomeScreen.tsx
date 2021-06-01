import * as React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {FlatList, StyleSheet, View} from "react-native";
import Coupon from "./Coupons/Coupon";
import {useCallback, useEffect, useState} from "react";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from '@react-navigation/native';

const webserivce = require('../WebService/webservice');

export default function HomeScreen({ navigation } : {navigation:any}) {
  const [coupons, setCoupons] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchData = useCallback(() => {
    AsyncStorage.getItem('@userid').then((userid) => {
      webserivce.getCoupons(userid).then((data: any) => {
        setCoupons(data);
        setDataLoaded(true);
      });
    });
  }, []);

  useFocusEffect( () => {
    if (!dataLoaded) {
      fetchData();
    }
  });

  return (
        <View style={styles.view}>
          <FlatList
              data={coupons}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <Coupon coupon={item}/>}
          />
          <Ionicons style={styles.icon} name="camera-sharp" size={60} color="white" onPress={() => { navigation.navigate('QrScanner'); setDataLoaded(false)}} />
        </View>
    )
}


const styles = StyleSheet.create({
  view:{
    marginTop: 10,
    flex: 1
  },
  viewHeader:{
    marginBottom: 15
  },
  title:{
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center'
  },
  icon:{
    position: 'absolute',
    bottom: 0,
    left: '41%',
    backgroundColor: 'green',
    borderRadius: 40,
    padding: 10
  }
})


