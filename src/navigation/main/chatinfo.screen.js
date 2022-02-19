import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Avatar, Colors, Switch } from 'react-native-ui-lib'
import { Alert } from 'react-native';

export const ChatInfo = ({ navigation }) => {
    const [allowMedia, setAllowMedia] = useState(false);
    const [blockExp, setBlockExp] = useState(true);
    const [filterMes, setFilterMes] = useState(true);
    const [block, setBlock] = useState(false);

    return (
        <View flex backgroundColor='#222'>
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
                    <View marginH-10 left marginV-20 centerV>
                        <Text text60 white>ANON-ID: </Text>
                        <Text text80 white>ANON-NAME: </Text>
                    </View>

                </View>

            </View>
            <View centerV marginH-10 style={{
                height: 50, 
                borderBottomColor: Colors.white,
                borderTopColor: '#222',
                borderRightColor: '#222',
                borderLeftColor: '#222',
                borderWidth: 2,
            }} marginV-20 >
                <Text white text60M>PERMISSIONS</Text>
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
            <View flex>

            </View>
            <View center paddingB-25>
                <TouchableOpacity onPress={() => { setBlock(!block); (block) ? Alert.alert('USER UNBLOCKED') : Alert.alert('USER BLOCKED') }}>
                    {(block ? <Text color='red' text50L>UNBLOCK USER</Text>
                        : <Text color='red' text50L>BLOCK USER</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    )
}