import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';

import CustomButton from '../components/buttons/CustomButton';
import {Colours} from '../constants/styles';

import SubHeader from '../components/headers/SubHeader';
import profilePic from '../assets/images/boywhatthehell.png';
import details from '../assets/icons/details.png';
import communications from '../assets/icons/communication.png';
import paymentMethods from '../assets/icons/paymentMethods.png';
import help from '../assets/icons/help.png';
import terms from '../assets/icons/terms.png';
import language from '../assets/icons/language.png';
import tutorial from '../assets/icons/tutorial.png';
import issue from '../assets/icons/issue.png';
import livechat from '../assets/icons/communications.png';
import rightarrow from '../assets/icons/right-arrow.png';

function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const createTwoButtonAlert = () =>
    Alert.alert('Edit profile?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed. Editing profile.'),
      },
    ]);

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <SubHeader headerTitle={'Settings'} />
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView>
          <View style={styles.personContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.profileImage} source={profilePic} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.fullNameText}>Xiaoyun Bonato</Text>
              {/* <View style={styles.buttonContainer}> */}
              <TouchableOpacity onPress={createTwoButtonAlert}>
                <CustomButton
                  text={'Edit profile'}
                  textColour={Colours.darkturqouise}
                  backgroundColour={Colours.pastelturquoise}
                  buttonWidth={150}
                />
              </TouchableOpacity>
              {/* </View> */}
            </View>
          </View>

          <Text style={styles.containerTitle}>App Settings</Text>
          <View style={styles.settingsContainer}>
            <View style={styles.settingsRow}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.iconContainer}>
                  <Image style={styles.settingIcons} source={details} />
                </View>
                <Text style={styles.settingsText}>Details</Text>
              </View>
              <View style={styles.rightArrow}>
                <TouchableOpacity>
                  <Image style={styles.arrowIcon} source={rightarrow} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.settingsRow}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.iconContainer}>
                  <Image style={styles.settingIcons} source={communications} />
                </View>
                <Text style={styles.settingsText}>Communications</Text>
              </View>
              <View style={styles.rightArrow}>
                <TouchableOpacity>
                  <Image style={styles.arrowIcon} source={rightarrow} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.settingsRow}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.iconContainer}>
                  <Image style={styles.settingIcons} source={paymentMethods} />
                </View>
                <Text style={styles.settingsText}>Payment Methods</Text>
              </View>
              <View style={styles.rightArrow}>
                <TouchableOpacity>
                  <Image style={styles.arrowIcon} source={rightarrow} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.settingsRow}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.iconContainer}>
                  <Image style={styles.settingIcons} source={help} />
                </View>
                <Text style={styles.settingsText}>Help</Text>
              </View>
              <View style={styles.rightArrow}>
                <TouchableOpacity>
                  <Image style={styles.arrowIcon} source={rightarrow} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.settingsRow}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.iconContainer}>
                  <Image style={styles.settingIcons} source={terms} />
                </View>
                <Text style={styles.settingsText}>Terms & Conditions</Text>
              </View>
              <View style={styles.rightArrow}>
                <TouchableOpacity>
                  <Image style={styles.arrowIcon} source={rightarrow} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={styles.containerTitle}>Preferences</Text>
          <View style={styles.preferencesContainer}>
            <View style={styles.settingsRow}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.iconContainer}>
                  <Image style={styles.settingIcons} source={language} />
                </View>
                <Text style={styles.settingsText}>Language</Text>
              </View>
              <View style={styles.rightArrow}>
                <TouchableOpacity>
                  <Image style={styles.arrowIcon} source={rightarrow} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.settingsRow}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.iconContainer}>
                  <Image style={styles.settingIcons} source={tutorial} />
                </View>
                <Text style={styles.settingsText}>App Tutorial</Text>
              </View>
              <View style={styles.rightArrow}>
                <TouchableOpacity>
                  <Image style={styles.arrowIcon} source={rightarrow} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.settingsRow}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.iconContainer}>
                  <Image style={styles.settingIcons} source={issue} />
                </View>
                <Text style={styles.settingsText}>Report Issue</Text>
              </View>
              <View style={styles.rightArrow}>
                <TouchableOpacity>
                  <Image style={styles.arrowIcon} source={rightarrow} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.settingsRow}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.iconContainer}>
                  <Image style={styles.settingIcons} source={livechat} />
                </View>
                <Text style={styles.settingsText}>Live Chat</Text>
              </View>
              <View style={styles.rightArrow}>
                <TouchableOpacity>
                  <Image style={styles.arrowIcon} source={rightarrow} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.settingsRow}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{paddingHorizontal: 15, marginRight: 15}}>
                  <Switch
                    trackColor={{false: '#767577', true: '#807F83'}}
                    thumbColor={isEnabled ? '#5E5E5E' : '#f4f3f4'}
                    ios_backgroundColor={Colours.white}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
                <Text style={styles.settingsText}>Dark mode</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colours.white,
  },

  header: {
    flex: 1.2,
    marginBottom: -20,
  },

  bodyContainer: {
    flex: 7,
    paddingHorizontal: 20,
    paddingTop: 10,
    // paddingVertical: 10,
    justifyContent: 'center',
  },

  personContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,

    backgroundColor: Colours.lightgrey,
    borderRadius: 30,
    marginBottom: 20,

    // borderColor: 'blue',
    // borderWidth: 1,
  },

  imageContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  fullNameText: {
    fontSize: 20,
    fontWeight: 800,
    color: Colours.westerngrey,
    paddingBottom: 10,
  },

  containerTitle: {
    fontWeight: 800,
    fontSize: 16,
    color: Colours.westerngrey,
    paddingBottom: 5,
  },

  settingsContainer: {
    backgroundColor: Colours.lightgrey,
    borderRadius: 30,
    marginBottom: 20,
  },

  settingsRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
  },

  preferencesContainer: {
    backgroundColor: Colours.lightgrey,
    borderRadius: 30,
    marginBottom: 20,
  },

  profileImage: {
    width: 100,
    height: 100,
  },

  iconContainer: {
    paddingHorizontal: 15,
    marginRight: 25,
  },

  settingsText: {
    fontWeight: 700,
    fontSize: 16,
    color: Colours.westerngrey,
  },

  settingIcons: {
    width: 40,
    height: 40,
  },

  text: {
    color: 'red',
    fontSize: 20,
  },

  arrowIcon: {
    width: 15,
    height: 15,
    justifyContent: 'center',
  },

  rightArrow: {
    paddingRight: 30,
    // position: 'absolute',
    // paddingHorizontal: 315,
  },
});
