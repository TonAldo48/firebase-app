import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Chat } from '../main/chat.feature';
import { ChatInfo } from './chatinfo.screen';

const Stack = createNativeStackNavigator();

export const ChatNavigation = ({navigation}) => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} navigation={navigation}/>
            <Stack.Screen name="ChatDetails" component={ChatInfo} options={{ headerShown: false }} navigation={navigation}/>
        </Stack.Navigator>
    )
}