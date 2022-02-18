import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';

export const ReceivedMessage = ({message}) => {
    return (
        <View style={{
            backgroundColor: "#dedede",
            padding: 10,
            borderRadius: 5,
            marginTop: 5,
            marginLeft: "5%",
            marginBottom: 5,
            maxWidth: '50%',
            alignSelf: 'flex-start',
            borderRadius: 20,
        }} key={1}>
            <Text style={{ fontSize: 16, color: "#000", justifyContent: "center" }} key={1}>{message}</Text>
            <View style={styles.leftArrow}>
            </View>
            <View style={styles.leftArrowOverlap}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    leftArrow: {
        position: "absolute",
        backgroundColor: "#dedede",
        //backgroundColor:"red",
        width: 20,
        height: 20,
        bottom: 0,
        borderBottomRightRadius: 25,
        left: -10
    },

    leftArrowOverlap: {
        position: "absolute",
        backgroundColor: "black",
        //backgroundColor:"green",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomRightRadius: 18,
        left: -20

    },
})