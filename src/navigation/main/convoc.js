import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component, createContext, PureComponent } from 'react';
import { StyleSheet, Alert, FlatList } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Colors, ListItem, Text, Avatar, AvatarHelper, Drawer, Button } from 'react-native-ui-lib'; //eslint-disable-line
import Conversations from '../../data/conversations.data';

const collectionsIcon = require('../../../assets/collections.png');
const starIcon = require('../../../assets/star.png');
const shareIcon = require('../../../assets/share.png');
const batchSize = 10;

export const ChatContext = createContext();

export class ConversationListScreen extends Component {

  constructor(props) {
    super(props);

    this.lastIndex = undefined;
    this.refArray = [];
    this.batchCounter = 0;
    this.userChat = {};

    this.state = {
      items: this.createItems({ min: 0, max: batchSize }),
      userChat: {}
    };
  }
  // 
  // ; 

  createItems(batch) {
    const data = Conversations.slice(batch.min, batch.max);

    const map = _.map(data, (item, index) => {
      const initials = AvatarHelper.getInitials(item.name);
      const avatarBadgeProps = { backgroundColor: Number(index) < 3 ? Colors.green30 : undefined };
      const buttonPress = () => Alert.alert(item.name);
      const listOnPress = () => { this.setState({ userChat: { item } }); console.log(this.state.userChat); this.props.navigation.navigate('ChatNavigation') };
      const imageSource = item.thumbnail ? { uri: item.thumbnail } : null;
      const rightButtons = [
        {
          text: 'More',
          icon: shareIcon,
          background: Colors.yellow10,
          onPress: () => Alert.alert(`More button pressed for item #${item.name}`)
        },
        {
          text: 'Archive',
          icon: collectionsIcon,
          background: Colors.blue30,
          onPress: () => Alert.alert(`Archive button pressed for item #${item.name}`)
        },
      ];
      const leftButton = {
        text: 'Read',
        icon: starIcon,
        background: Colors.green30,
        onPress: () => Alert.alert(`Read button pressed for item #${item.name}`)
      };

      return {

        ...item,
        initials,
        avatarBadgeProps,
        buttonPress,
        listOnPress,
        imageSource,
        rightButtons,
        leftButton
      };
    });

    return map;
  }

  getNewItems() {
    this.batchCounter++;
    const newItems = this.createItems({
      min: batchSize * this.batchCounter,
      max: batchSize + (batchSize * this.batchCounter)
    });
    const items = _.concat(this.state.items, newItems);
    this.setState({ items });
  }

  closeLast(index) {
    if (this.lastIndex !== undefined && this.lastIndex !== index) {
      this.closeDrawer(this.lastIndex);
    }
    this.lastIndex = index;
  }

  closeDrawer(index) {
    this.refArray[index].closeDrawer();
  }

  addRef = (ref, index) => {
    this.refArray[index] = ref;
  }

  onEndReached = () => {
    this.getNewItems();
  }

  onSwipeableWillOpen = (props) => {
    this.closeLast(props.index);
  }

  renderItem = ({ item, index }) => {
    return (

      <ContactItem item={item} index={index} addRef={this.addRef} onSwipeableWillOpen={this.onSwipeableWillOpen} />

    )
  }
  keyExtractor = (item, index) => `${item.name}-${index}-${item.thumbnail}`;
  render() {
    return (
      <>
        <ChatContext.Provider
          value={{
            user: 'hey'
          }}
        >
          <FlatList
            style={{ backgroundColor: 'black' }}
            data={this.state.items}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            onEndReached={this.onEndReached}
          />
        </ChatContext.Provider>
      </>
    );
  }
}

class ContactItem extends PureComponent {
  static propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
    addRef: PropTypes.func,
    onSwipeableWillOpen: PropTypes.func
  }

  render() {
    const { item, index, addRef, onSwipeableWillOpen } = this.props;

    return (
      <Drawer
        leftItem={item.leftButton}
        rightItems={item.rightButtons}
        // itemsMinWidth={80}
        ref={r => addRef(r, index)}
        index={index} // sent for the 'closeLast' functionality
        onSwipeableWillOpen={onSwipeableWillOpen} // sent for the 'closeLast' functionality
      >

        <ListItem
          style={{ backgroundColor: 'black' }}
          height={75.8}
          onPress={item.listOnPress}
        >
          <ListItem.Part left>
            <Avatar
              size={54}
              source={item.imageSource}
              label={item.initials}
              badgeProps={item.avatarBadgeProps}
              containerStyle={styles.avatar}
            />
          </ListItem.Part>
          <ListItem.Part middle column containerStyle={styles.border}>
            <ListItem.Part containerStyle={styles.middle}>
              <Text style={styles.text} text70 color={Colors.white} numberOfLines={1}>{item.name}</Text>
              <Text style={styles.subtitle} text90 color={Colors.grey50}>{item.timestamp}</Text>
            </ListItem.Part>
            <ListItem.Part>
              <Text style={styles.text} text80 color={Colors.grey40} numberOfLines={1}>{item.text}</Text>
              {item.count > 0 && <Button size={'small'} label={item.count} onPress={item.buttonPress} />}
            </ListItem.Part>
          </ListItem.Part>
        </ListItem>

      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey70,
    paddingRight: 17
  },
  avatar: {
    marginHorizontal: 18
  },
  middle: {
    marginBottom: 3
  },
  text: {
    flex: 1,
    marginRight: 10
  },
  subtitle: {
    marginTop: 2
  }
});

export default gestureHandlerRootHOC(ConversationListScreen);