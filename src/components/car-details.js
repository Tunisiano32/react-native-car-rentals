import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const image_v_1 = require('../assets/vehicles/v-1.png');
const image_v_2 = require('../assets/vehicles/v-2.png');
const image_v_3 = require('../assets/vehicles/v-3.png');
const image_v_4 = require('../assets/vehicles/v-4.png');

const VehiclesImages = {
  1: image_v_1,
  2: image_v_2,
  3: image_v_3,
  4: image_v_4,
};

const CarDetails = ({vehicle}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.element}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('Info', {id: vehicle.id});
      }}>
      <View style={styles.infoArea}>
        <Text style={styles.infoTitle}>
          {vehicle.make} - {vehicle.model}
        </Text>
        <Text style={styles.infoSub}>
          {vehicle.type} {vehicle.transmission}
        </Text>
        <Text style={styles.inforPrice}>
          <Text style={styles.infoAmount}>${vehicle.price_per_day}</Text>/ day
        </Text>
      </View>
      <View style={styles.imageArea}>
        <Image
          source={VehiclesImages[vehicle.id]}
          resizeMode="contain"
          style={styles.vehicleImage}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default CarDetails;
