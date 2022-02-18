import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ConversationListScreen } from '../main/conversations.screen';

import { SettingsScreen } from '../main/settings.screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const MainNavigator = ({ navigation }) => {
    return (
        <>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'ChatList') {
                            iconName = focused
                                ? 'chatbox-outline'
                                : 'chatbox';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'md-settings-outline' : 'md-settings-sharp';
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveBackgroundColor: 'black',
                    tabBarInactiveBackgroundColor: 'black'
                })}
            >
                <Tab.Screen name="ChatList" component={ConversationListScreen} navigation={navigation} />
                <Tab.Screen name="Settings" component={SettingsScreen} navigation={navigation}/>
            </Tab.Navigator>
        </>
    )
}