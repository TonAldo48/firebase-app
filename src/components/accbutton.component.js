import React from 'react';
import { Button } from 'react-native-ui-lib';
import { LogBox } from 'react-native';

export const AccButton = ({navigation, label, navTo}) => {
    LogBox.ignoreLogs([
        "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
      ]);

    return(
        <Button 
        margin-20
        style={{ width: 120 }}
        enableShadow
        color='black'
        backgroundColor='white'
        borderRadius={15}
        label={label}
        onPress={()=>{navigation.goBack(); navigation.navigate(navTo)}}
        />
    );
}

