import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {FavoritesContext} from '../context/favorite.context';
import CarDetails from '../components/car-details';

const Saved = () => {
  const {favorites} = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>Favorites</Text>
      </View>
      <View style={styles.listSection}>
        {favorites.length > 0 ? (
          <ScrollView style={styles.elementPallet}>
            {favorites.map(vehicle => (
              <CarDetails vehicle={vehicle} key={vehicle.id} />
            ))}
          </ScrollView>
        ) : (
          <Text>You do not have any favorite cars</Text>
        )}
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
  element: {
    height: 100,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 8,
  },
  infoArea: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  infoSub: {
    fontSize: 12,
    fontWeight: '600',
    color: '#696969',
  },
  inforPrice: {
    position: 'absolute',
    bottom: 0,
    fontSize: 12,
    color: '#696969',
    fontWeight: 'bold',
  },
  infoAmount: {
    fontSize: 12,
    fontWeight: '600',
    color: 'black',
  },
  imageArea: {
    flex: 1,
  },
  vehicleImage: {
    width: '140%',
    position: 'absolute',
    height: '140%',
    top: -10,
    left: -10,
  },
});

export default Saved;
