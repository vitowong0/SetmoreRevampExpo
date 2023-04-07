import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

function LoginScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      {/* <View style={styles.header}>{<HomeHeader />}</View> */}
      <View style={styles.bodyContainer}>
        <View style={styles.bodyTextContainer}>
          <TouchableOpacity
            onPress={() => {
              alert('You found this button!');
            }}>
            <Text style={styles.bodyText}>Login Screen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 2.5,
    width: '100%',
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
    color: 'purple',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});

export default LoginScreen;
