import React from 'react';
import {
    View,
    Colors,
    TouchableOpacity
} from 'react-native-ui-lib';
import { Ionicons } from 'react-native-vector-icons';
import { KeyboardAvoidingView, FlatList, TextInput, Button } from 'react-native';


import { ChatInfoBar } from '../../components/chatinfo.component';
import { SentMessage } from '../../components/sentmessage.component';
import { ReceivedMessage } from '../../components/receivedmessage.component';

import { Conversations } from '../../data/conversations.data';

export const Chat = ({ navigation }) => {
    var index = 1;
    const renderItem = ({ item }) => {
        index++;
        if (item.isNew == false) {
            return <SentMessage message={item.text} />
        }
        return <ReceivedMessage message={item.text} /> 
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1, backgroundColor: 'black' }}
            keyboardVerticalOffset={90}
        >
            <View flex >
                <ChatInfoBar navigation={navigation} marginB-24 />
                <View flex >
                    <FlatList
                        inverted
                        data={Conversations}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.name} + ${index} + ${1}`} />
                    <View padding-10 marginT-10 row style={{
                        borderTopColor: Colors.violet10,
                        borderWidth: 2,
                        backgroundColor: 'black'
                    }}>
                        <TextInput
                            keyboardAppearance='dark'
                            style={{
                                height: 40,
                                fontSize: 20,
                                width: '88%',
                                marginRight: 10,
                                borderRadius: 15,
                                backgroundColor: 'white'
                            }}
                            activeUnderlineColor='black'
                            selectionColor='blue'
                        />
                        <View centerV style={{ borderRadius: 5 }}>
                            <Ionicons
                                name='arrow-up'
                                size={30}
                                compact={true}
                                borderRadius={50}
                                style={{ color: Colors.violet10, borderRadius: 20 }}
                                onPress={()=> console.log('pressed')}
                            />
                        </View>
                    </View>
                </View>
            </View>

        </KeyboardAvoidingView>

    )
}

