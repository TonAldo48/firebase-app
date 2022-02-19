import React from 'react';
import {
  Fader
} from 'react-native-ui-lib';
import { SafeAreaView } from 'react-native';
import { TopBar } from './src/components/topbar.components';
import { Chat } from './src/navigation/main/chat.feature'

import { AccountNavigator } from './src/navigation/account/account.navigator';
import { ChatInfo } from './src/navigation/main/chatinfo.screen';

export default function App() {

  return (
    <SafeAreaView style={{ height: '100%', backgroundColor: 'black' }}>
      <TopBar />
        <AccountNavigator />
    </SafeAreaView>
  );
}
