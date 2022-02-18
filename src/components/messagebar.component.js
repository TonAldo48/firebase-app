import React from 'react';

import { TextInput, Button} from 'react-native-paper';

import {
    View,
    Colors
} from 'react-native-ui-lib';



export const MessageBar = ({functionP}) => {

    return (
            <View padding-10 marginT-10 row style={{
                borderTopColor: Colors.violet10,
                borderWidth: 2,
                backgroundColor:'black'
            }}>
                <TextInput
                    keyboardAppearance='dark'
                    style={{
                        height: 40,
                        fontSize: 20,
                        width: '85%',
                        marginRight: 10,
                        borderRadius: 15,
                        backgroundColor: 'white'
                    }}
                    activeUnderlineColor='black'
                    selectionColor='blue'
                />
                <View centerV paddingR-10 >
                    <Button onPress={()=>console.log('iloggedlthis')} style={{backgroundColor:Colors.violet10, borderRadius:10}} icon={"arrow-up"} size={10} mode="contained" compact={true} />
                </View>
            </View>
    )
}