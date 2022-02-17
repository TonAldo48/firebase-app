import React from 'react';
import { View, TextField, Typography, ActionBar, Colors } from 'react-native-ui-lib';
import { AccButton } from '../../components/accbutton.component';
import { Ionicons } from 'react-native-vector-icons';
import {
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

export const LoginScreen = ({ navigation }) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                <ActionBar
                    keepRelative
                    backgroundColor='rgba(0,0,0,0.8)'
                    actions={[
                        {
                            iconSource: () => <Ionicons name='arrow-back' size={32} color='white' />, onPress: () => navigation.navigate('Initial')
                        },
                        { label: 'LOGIN', labelStyle: { color: Colors.white, fontWeight: '400', ...Typography.text60 } }
                    ]}
                />
                <View centerV centerH flex style={{ backgroundColor: 'rgba(0,0,0,0.8)', height: '100%' }}>
                    <View style={{ height: '70%', width: '70%' }}>
                        <TextField
                            keyboardAppearance='dark'
                            floatingPlaceholder
                            placeholder="UNIQUE IDENTIFIER"
                            placeholderTextColor='white'
                            color='white'
                            labelColor='white'
                            label='Unique Identifier'
                            ViewStyle
                            enableErrors
                        />
                        <TextField
                            keyboardAppearance='dark'
                            floatingPlaceholder
                            placeholder="PASSWORD"
                            placeholderTextColor='white'
                            color='white'
                            labelColor='white'
                            label='Unique Identifier'
                            enableErrors
                            validate={['required', (value) => value.length > 0]}
                        />
                        <View center >
                            <AccButton label='LOGIN' navigation={navigation} navTo='Main'/>
                        </View>
                    </View>
                </View>
                </>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
