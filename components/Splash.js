import React, { Component }from 'react';
import { StyleSheet, Text, View } from 'react-native'
export default class Splash extends Component{
    render() {
        return(
            <view style={StyleSheet.Comtainer}>
                <Text style={styles.title}>

                </Text>
            </view>
        )

    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItemds: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})
