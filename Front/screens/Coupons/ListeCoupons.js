import React from 'react'
import { View, StyleSheet, FlatList } from "react-native";
import Coupon from "./Coupon";
import AsyncStorage from '@react-native-async-storage/async-storage';

const webservice = require('../../WebService/webservice');

class ListeCoupons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coupons: []
        };
    }

    async componentDidMount() {
        const userid = await AsyncStorage.getItem('@userid');
        webservice.getCoupons(userid).then((response) => {
            this.setState({
                coupons: response
            });
        });
    }

    render() {
        return (
            <View style={styles.view}>
                <FlatList
                    data={this.state.coupons}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <Coupon coupon={item}/>}
                />
            </View>
        )
    }
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
    button:{
    }
})

export default ListeCoupons
