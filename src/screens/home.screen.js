import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {vehicles} from '../vehicles';
import CarDetails from '../components/car-details';

const magnifying_glass = require('../assets/icons/magnifying-glass.png');

const Home = () => {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [filterTab, setFilterTab] = useState('all');

  useEffect(() => {
    if (filterTab === 'all') {
      setFilteredVehicles(vehicles);
    } else {
      setFilteredVehicles(
        vehicles.filter(v => v.type.toLowerCase() === filterTab),
      );
    }
  }, [filterTab, vehicles]);

  const searchVehicles = keywords => {
    setFilterTab('all');
    const result = vehicles.filter(vehicle => {
      return (
        vehicle.make.toLowerCase().includes(keywords) ||
        vehicle.model.toLowerCase().includes(keywords)
      );
    });
    setFilteredVehicles(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>Rent a Car</Text>
      </View>
      <View style={styles.searchSection}>
        <View style={styles.searchPallet}>
          <TextInput
            style={styles.searchField}
            placeholder="Search a Car..."
            onChangeText={value => searchVehicles(value.toLowerCase())}
          />
          <View style={styles.searchIconArea}>
            <Image
              source={magnifying_glass}
              resizeMode="contain"
              style={styles.magnifyingIconStyle}
            />
          </View>
        </View>
      </View>
      <View style={styles.typesSection}>
        <TouchableOpacity onPress={() => setFilterTab('all')}>
          <Text
            style={
              filterTab === 'all' ? styles.typesTextActive : styles.typesText
            }>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilterTab('suv')}>
          <Text
            style={
              filterTab === 'suv' ? styles.typesTextActive : styles.typesText
            }>
            SUV
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilterTab('sedan')}>
          <Text
            style={
              filterTab === 'sedan' ? styles.typesTextActive : styles.typesText
            }>
            Sedan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilterTab('hatchback')}>
          <Text
            style={
              filterTab === 'hatchback'
                ? styles.typesTextActive
                : styles.typesText
            }>
            Hatchback
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilterTab('mpv')}>
          <Text
            style={
              filterTab === 'mpv' ? styles.typesTextActive : styles.typesText
            }>
            MPV
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listSection}>
        <Text style={styles.headText}>Most Rented</Text>
        <ScrollView style={styles.elementPallet}>
          {filteredVehicles.map(vehicle => (
            <CarDetails vehicle={vehicle} key={vehicle.id} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  titleSection: {
    marginTop: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  searchSection: {
    marginTop: 15,
    justifyContent: 'center',
  },
  searchPallet: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 40,
    borderRadius: 8,
    width: '100%',
    paddingLeft: 10,
  },
  searchField: {
    width: '90%',
    height: 40,
  },
  searchIconArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  magnifyingIconStyle: {
    width: 30,
    height: 30,
  },

  typesSection: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  typesTextActive: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  typesText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#696969',
  },
  listSection: {
    marginTop: 25,
  },
  headText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  elementPallet: {
    width: '100%',
    height: 430,
  },
});

export default Home;
