import React from 'react';

import {
    Text,
    View,
    Colors,
    Button
} from 'react-native-ui-lib';
import { TextInput } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';
import { KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const Chat = () => {
    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{flex:1}}
            >
                <View flex>

                </View>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View padding-10 spread row>
                        <TextInput
                            keyboardAppearance='dark'
                            style={{
                                height: 40,
                                fontSize: 20,
                                width: '90%',
                                marginRight: 10,
                                borderRadius: 15,
                                color: 'yellow',
                                backgroundColor: 'white'
                            }}
                            selectionColor='blue'
                        />
                        <Button label={'Press'} size={20} backgroundColor={Colors.red30} />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    )
}
