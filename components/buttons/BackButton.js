import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import button from '../../assets/icons/left.png';

const BackButton = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={button} />
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
  },
  image: {
    width: 30,
    height: 30,
  },
});
