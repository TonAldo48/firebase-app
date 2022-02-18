import { View, Text, Colors } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';

export const SentMessage = ({message}) => {
    return (
        <View style={{
            backgroundColor: Colors.violet10,
            padding: 10,
            marginLeft: '45%',
            borderRadius: 5,
            marginBottom: 5,
            marginTop: 5,
            marginRight: "5%",
            maxWidth: '50%',
            alignSelf: 'flex-end',
            borderRadius: 20,
        }} key={1}>
            <Text style={{ fontSize: 16, color: "#fff", }} key={1}>{message}</Text>
            <View style={styles.rightArrow}></View>
            <View style={styles.rightArrowOverlap}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    rightArrow: {
        position: "absolute",
        backgroundColor: Colors.violet10,
        //backgroundColor:"red",
        width: 20,
        height: 20,
        bottom: 0,
        borderBottomLeftRadius: 25,
        right: -10
    },

    rightArrowOverlap: {
        position: "absolute",
        backgroundColor: "black",
        //backgroundColor:"green",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomLeftRadius: 18,
        right: -20

    }
})