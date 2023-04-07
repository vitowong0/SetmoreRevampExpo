import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SubHeader from '../components/headers/SubHeader';
import {Colours} from '../constants/styles';

import AllCompaniesGridTile from '../components/grid-tiles/AllCompaniesGridTile';
import {ALLCOMPANYDATA} from '../components/data/DummyAllCompaniesData';

function AllCompaniesScreen() {
  const navigation = useNavigation();

  function renderCompanyGridTile(itemData) {
    return (
      <AllCompaniesGridTile
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
      <View style={styles.header}>
        <SubHeader headerTitle={'All companies'} />
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={ALLCOMPANYDATA}
          keyExtractor={item => item.id}
          renderItem={renderCompanyGridTile}
          numColumns={1}
        />
      </View>
    </View>
  );
}

export default AllCompaniesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.2,
    marginBottom: -20,
  },

  bodyContainer: {
    flex: 7,
    backgroundColor: Colours.white,
    paddingHorizontal: 20,
  },
});
