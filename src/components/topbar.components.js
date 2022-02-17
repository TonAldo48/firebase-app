import React from 'react';
import { View, Text, Typography } from 'react-native-ui-lib';
Typography.loadTypographies({
    act: { fontSize: 20, fontWeight: '300', lineHeight: 30 }
});
export const TopBar = () => {
    return (
        <View left bg-black spread row paddingL-10 paddingR-20 centerV style={{ height: 50 }}>
            <Text white text40>ANONCHAT</Text>
        </View>
    )
}