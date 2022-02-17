import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Fader } from 'react-native-ui-lib'
import { RegisterScreen } from './register.screen';
import { InitialScreen } from './initial.screen';
import { LoginScreen } from './login.screen';
import { MainNavigator } from './index.screen';


const Stack = createNativeStackNavigator();

export const AccountNavigator = () => {
    return (
        <>
        <NavigationContainer independent={true}>
            <Stack.Navigator
            >
                <Stack.Screen name="Initial" component={InitialScreen}
                    options={{
                        headerShown: false,
                    }}

                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                        presentation: 'modal',
                    }}

                />
                <Stack.Screen name="Register" component={RegisterScreen}
                    options={{
                        headerShown: false,
                        presentation: 'modal',
                    }} />
                <Stack.Screen name="Main" component={MainNavigator}
                    options={{
                        headerShown: false,
                        presentation: 'card',
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}