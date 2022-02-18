import { View, Avatar, Text, Colors, TouchableOpacity } from 'react-native-ui-lib';
import { Button } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';

export const ChatInfoBar = ({ navigation }) => {
    return (
        <View centerV row height={50} paddingB-10 style={{
            borderBottomColor: Colors.violet10,
            borderWidth: 2,
            justifyContent: 'center',
            backgroundColor: 'black'
        }}>
            <Button
                onPress={() => navigation.goBack()}
                icon={() => (
                    <Ionicons name='arrow-back' size={30} color={Colors.violet10} />
                )} compact={true} />
            <TouchableOpacity row onPress={() => navigation.navigate('ChatDetails')}>
                <Avatar size={35} source={require('../../assets/anonimage.png')} />
            </TouchableOpacity>

            <View flex row left centerV>
                <View paddingH-20 >
                    <TouchableOpacity flex row center onPress={() => navigation.navigate('ChatDetails')}>
                        <Text white text60BO>LOREM IPSUM </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}