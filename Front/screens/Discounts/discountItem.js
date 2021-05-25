import React from 'react'
import { View, StyleSheet, Text } from "react-native";
import Moment from 'moment';

class DiscountItem extends React.Component {
    render(){
        console.log(this.props.discount)
        const discount = this.props.discount
        Moment.locale('fr');
        var dt = discount.createdAt;
        return(
            <View style={styles.view}>
                <View style={styles.viewHeader}>
                    <Text style={styles.title}>{discount.libelle}</Text>
                </View>
                <View style={styles.viewDescription}>
                    <Text style={styles.text}>{discount.description}</Text>
                    <Text style={styles.code}>Avec le code : {discount.code}</Text>
                </View>
                <View style={styles.viewFooter}>
                    <Text style={styles.date}>Expire le {Moment(dt).subtract(10, 'days').calendar()}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        height: 120,
        flexDirection: 'column',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid'
    },
    viewHeader:{
        flex: 3
    },
    viewDescription:{
        flex: 7
    },
    viewFooter:{
        flex: 2
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'red'
    },
    text:{

    },
    date:{
        textAlign: 'right'
    },
    code:{
        fontWeight: 'bold'
    }
})

export default DiscountItem
