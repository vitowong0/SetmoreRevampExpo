import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HomeHeader from '../components/headers/HomeHeader';
import {Colours} from '../constants/styles';

import MiniCompanyGridTile from '../components/grid-tiles/MiniCompanyGridTile';
import {COMPANYDATATWO} from '../components/data/DummyCompanyDataTwo';
import {COMPANYDATATHREE} from '../components/data/DummyCompanyDataThree';
import {COMPANYDATAFOUR} from '../components/data/DummyCompanyDataFour';

function HomeScreen() {
  const navigation = useNavigation();

  function renderMiniCompanyGridTile(itemData) {
    return (
      <MiniCompanyGridTile
        id={itemData.item.id}
        name={itemData.item.name}
        image={itemData.item.image}
        description={itemData.item.description}
        rating={itemData.item.rating}
        services={itemData.item.services}
        staff={itemData.item.staff}
        timesAvailable={itemData.item.timesAvailable}
        duration={itemData.item.duration}
        cost={itemData.item.cost}
        heartIcon={itemData.item.heartIcon}
      />
    );
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>{<HomeHeader first_name={'Vito'} />}</View>
      <View style={styles.bodyContainer}>
        <ScrollView>
          <View style={styles.topContainer}>
            <View style={styles.topTextContainer}>
              <Text style={styles.bigGreyText}>Available now</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AllCompaniesScreen');
                }}>
                <Text style={styles.smallGreenText}>View all</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              scrollEventThrottle={200}
              decelerationRate={'normal'}>
              <FlatList
                data={COMPANYDATAFOUR}
                keyExtractor={item => item.id}
                renderItem={renderMiniCompanyGridTile}
                numColumns={4}
              />
            </ScrollView>
          </View>
          <View style={styles.bottomContainer}>
            <View style={(style = styles.topTextContainer)}>
              <Text style={styles.bigGreyText}>Recommended for you</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AllCompaniesScreen');
                }}>
                <Text style={styles.smallGreenText}>View all</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              scrollEventThrottle={200}
              decelerationRate={'normal'}>
              <FlatList
                data={COMPANYDATATHREE}
                keyExtractor={item => item.id}
                renderItem={renderMiniCompanyGridTile}
                numColumns={4}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.2,
  },

  bodyContainer: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  topContainer: {
    paddingVertical: 10,
  },

  topTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  bigGreyText: {
    fontSize: 20,
    fontWeight: 800,
    color: Colours.westerngrey,
  },

  smallGreenText: {
    fontSize: 16,
    fontWeight: 700,
    color: Colours.darkturqouise,
  },

  bottomContainer: {
    paddingVertical: 10,
  },

  bodyTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
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
