import React from 'react';
import {
  View,
  Avatar,
} from 'react-native-ui-lib';
import { AccButton } from '../../components/accbutton.component';

export const InitialScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: 'rgba(0,0,0,1)', height: '100%' }}>
      <View paddingT-60 paddingB-60 centerH
      >
        <Avatar size={250} source={require('../../../assets/anonimage.png')} />
      </View>
      <View centerH spread>
        <AccButton label='LOGIN' navigation={navigation} navTo='Login' />
        <AccButton label='REGISTER' navigation={navigation} navTo='Register'/>
      </View>
    </View>
  )
}