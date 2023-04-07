import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const CustomImageButton = ({
  image,
  text,
  textColour,
  backgroundColour,
  buttonWidth,
}) => {
  return (
    <View
      style={[
        styles.buttonContainer,
        {backgroundColor: backgroundColour},
        {width: buttonWidth},
      ]}>
      <Image style={styles.image} source={image} />
      <Text style={[styles.buttonText, {color: textColour}]}>{text}</Text>
    </View>
  );
};

export default CustomImageButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    // marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // marginRight: 10,
    // marginLeft: 10,
    // width: 170,

    // borderColor: 'red',
    // borderWidth: 1,
  },

  buttonText: {
    fontWeight: 800,
    fontSize: 18,
    textAlign: 'center',
  },

  image: {
    width: 20,
    height: 20,
  },
});
