import React from 'react'
import {View, StyleSheet, Text} from "react-native";
import Moment from 'moment';

class Coupon extends React.Component {

    render(){
        return(
            <View style={styles.view}>
                <View style={styles.viewHeader}>
                    <Text style={styles.title}>{this.props.coupon.libelle}</Text>
                </View>
                <View style={styles.viewDescription}>
                    <Text style={styles.text}>{this.props.coupon.description}</Text>
                    <Text style={styles.Libellecode} selectable={true}>Avec le code : {this.props.coupon.code}</Text>
                </View>
                <View style={styles.viewFooter}>
                    <Text style={styles.date}>Expire le {Moment(this.props.coupon.dateExpiration).format('DD/MM/YYYY')}</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        height: 120,
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
        fontSize: 30,
        textAlign: 'center'
    },
    text:{
        marginTop: 10
    },
    date:{
        textAlign: 'right'
    },
    Libellecode:{
        marginTop: 20,
        fontWeight: 'bold'
    },
    Code:{
        backgroundColor: 'yellow'
    }
})

export default Coupon
