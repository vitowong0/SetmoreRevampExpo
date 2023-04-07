import {
  StyleSheet,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';

import NotificationItem from '../components/items/NotificationItem';
import {NOTIFICATIONSDATA} from '../components/data/DummyNotificationData';

import {Colours} from '../constants/styles';
import Header from '../components/headers/Header';

function NotificationsScreen() {
  function renderNotificationItem(itemData) {
    return (
      <TouchableOpacity>
        <NotificationItem
          id={itemData.item.id}
          image={itemData.item.image}
          companyName={itemData.item.companyName}
          detailText={itemData.item.detailText}
          timeAgo={itemData.item.timeAgo}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <Header headerTitle={'Notifications'} />
      </View>

      {/* <View style={styles.container}> */}
      <View style={styles.bodyContainer}>
        <FlatList
          data={NOTIFICATIONSDATA}
          keyExtractor={item => item.id}
          renderItem={renderNotificationItem}
          numColumns={1}
        />
      </View>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.2,
    width: '100%',
    marginBottom: -20,
  },

  bodyContainer: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  bodyTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bodyText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: Colours.darkturqouise,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});

export default NotificationsScreen;
