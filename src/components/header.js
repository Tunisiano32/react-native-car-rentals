import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const menu = require('../assets/icons/menu.png');
const face = require('../assets/face.png');

const Header = () => {
  return (
    <View style={styles.headerSection}>
      <Image source={menu} resizeMode="contain" style={styles.menuIconStyle} />
      <Image source={face} resizeMode="contain" style={styles.faceIconStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    marginLeft: 10,
    marginRight: 10,
  },
  menuIconStyle: {
    width: 30,
  },
  faceIconStyle: {
    width: 40,
  },
});

export default Header;
