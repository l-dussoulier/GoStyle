import React from 'react'
import { View, StyleSheet, FlatList, Text, Button, TouchableOpacity } from "react-native";
import DiscountItem from "./discountItem";
import {getAllDiscounts} from "../../WebService/webservice";

class Discount extends React.Component {

    constructor(props) {
        super(props);
        this._tabDiscounts = []
    }

    _logOut() {
        console.log('deco');
        navigation.navigate('Login');
    }

    _loadDiscounts() {
        getAllDiscounts().then(data => {
            this._tabDiscounts = data
            this.forceUpdate()
        });
    }

    UNSAFE_componentWillMount() {
        this._loadDiscounts()
    }
    render() {
        return (
            <View style={styles.view}>
                <View style={styles.viewHeader}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this._logOut()}
                    >
                        <Text>Déconnexion</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Liste des réductions</Text>
                </View>
                <FlatList
                    data={this._tabDiscounts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <DiscountItem discount={item}/>}
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

export default Discount
