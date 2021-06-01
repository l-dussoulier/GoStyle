import * as React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View} from "react-native";
import {useCallback, useState} from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
import Moment from "moment";

const webserivce = require('../../webservice/webservice');

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

  const dateText = (date: Date) => {
    const momentDate = Moment(date);

    if (momentDate.isBefore(Moment())) {
      return <Text style={styles.dateExpire}>A Expiré le : {momentDate.format('DD/MM/YYYY [à] hh:mm')}</Text>
    } else {
      return <Text style={styles.dateNotExpire}>Expire le : {momentDate.format('DD/MM/YYYY [à] hh:mm')}</Text>
    }
  }

  return (

        <View style={styles.view}>
          {coupons.map(coupon => (
              <View style={styles.couponContainer} key={coupon.id}>
                <View style={styles.couponHeader}>
                  <Text style={styles.couponTitle}>{coupon.libelle}</Text>
                </View>
                <View style={styles.couponDescription}>
                  <Text style={styles.text}>{coupon.description}</Text>
                  <Text style={styles.Libellecode} selectable={true}>Avec le code : {coupon.code}</Text>
                </View>
                <View style={styles.couponFooter}>
                  {dateText(coupon.dateExpiration)}
                </View>
              </View>
          ))}

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
  },
  couponContainer:{
    height: 130,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    marginBottom : 10,
    marginLeft: 5,
    marginRight: 5,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'gray',
    shadowOpacity: 1.0,
    borderColor: 'black',
    borderStyle: 'solid',
    padding: 5
  },
  couponHeader:{
    flex: 3
  },
  couponDescription:{
    flex: 7
  },
  couponFooter:{
    flex: 2
  },
  couponTitle:{
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  text:{
    marginTop: 10
  },
  dateExpire:{
    textAlign: 'right',
    color: 'red'
  },
  dateNotExpire:{
    textAlign: 'right',
    color: 'green'
  },
  Libellecode:{
    marginTop: 20,
    fontWeight: 'bold'
  },
  Code:{
    backgroundColor: 'yellow'
  }
})


