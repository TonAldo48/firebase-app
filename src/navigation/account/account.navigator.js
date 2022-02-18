import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterScreen } from './register.screen';
import { InitialScreen } from './initial.screen';
import { LoginScreen } from './login.screen';
import { MainNavigator } from './index.screen';
import { ChatNavigation } from '../main/chat.navigation';


const Stack = createNativeStackNavigator();

export const AccountNavigator = ({ navigation }) => {
    return (
        <>
            <NavigationContainer independent={true}>
                <Stack.Navigator
                >
                    <Stack.Screen name="Initial" component={InitialScreen}
                        options={{
                            headerShown: false,
                        }}
                        navigation={navigation}
                    />
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            headerShown: false,
                            presentation: 'modal',
                        }}
                        navigation={navigation}

                    />
                    <Stack.Screen name="Register" component={RegisterScreen}
                        options={{
                            headerShown: false,
                            presentation: 'modal',
                        }}
                        navigation={navigation}
                    />
                    <Stack.Screen name="Main" component={MainNavigator}
                        options={{
                            headerShown: false,
                            presentation: 'card',
                        }}
                        navigation={navigation}
                    />
                    <Stack.Screen name="ChatNavigation" component={ChatNavigation}
                        options={{
                            headerShown: false,
                            presentation: 'card',
                        }}
                        navigation={navigation}
                    />


                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}