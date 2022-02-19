import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Avatar, Colors, Switch } from 'react-native-ui-lib'
import { Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const SettingsScreen = ({ navigation }) => {
    const [allowMedia, setAllowMedia] = useState(false);
    const [blockExp, setBlockExp] = useState(true);
    const [filterMes, setFilterMes] = useState(true);
    const [block, setBlock] = useState(false);

    return (
        <View flex backgroundColor='black'>

            <View
                left
                paddingV-15
                br50
                style={{
                    borderBottomColor: Colors.violet10,
                    borderColor: Colors.violet10,
                    borderWidth: 2,
                }}>

                <View marginH-10 row>
                    <Avatar size={100} source={require('../../../assets/anonimage.png')} />
                    <View marginH-10 marginV-20 left spread centerV>
                        <Text text60 white>MY-ANON-ID: </Text>
                        <Text text80 white>MY-ANON-NAME: </Text>
                    </View>

                </View>

            </View>
            <KeyboardAwareScrollView>
                <View centerV marginH-10 style={{
                    height: 50,
                    borderBottomColor: Colors.white,
                    borderWidth: 2,
                }} marginV-20 >

                    <Text white text60M> GENERAL PERMISSIONS</Text>
                </View>
                <View spread row marginH-10 >
                    <Text white text70BO >Allow Media</Text>
                    <Switch
                        value={allowMedia}
                        onValueChange={(allowMedia) => setAllowMedia(!!allowMedia)}
                        style={{ marginBottom: 20 }}
                    />
                </View>
                <View spread row marginH-10 >
                    <Text white text70BO >Block Explicit Media</Text>
                    <Switch
                        value={blockExp}
                        onValueChange={(blockExp) => setBlockExp(!!blockExp)}
                        style={{ marginBottom: 20 }}
                    />
                </View>
                <View spread row marginH-10 >
                    <Text white text70BO >Filter Messages</Text>
                    <Switch
                        value={filterMes}
                        onValueChange={(filterMes) => setFilterMes(!!filterMes)}
                        style={{ marginBottom: 20 }}
                    />
                </View>
                <View flex></View>
                </KeyboardAwareScrollView>
                <View flex bottom center>
                    <TouchableOpacity>
                        <Text color='red' text50L>LOGOUT</Text>
                    </TouchableOpacity>
                </View>
            
        </View >
    )
}