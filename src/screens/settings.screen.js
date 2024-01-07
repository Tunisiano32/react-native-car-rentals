import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';

const face = require('../assets/face.png');

const Settings = () => {
  const [newsLetter, setNewsLetter] = useState(false);
  const toggleSwitch = () => setNewsLetter(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.profilePicture}>
        <Image
          source={face}
          resizeMode="contain"
          style={styles.faceIconStyle}
        />
      </View>
      <View style={styles.form}>
        <View style={styles.formRow}>
          <TextInput placeholder="Adam" style={styles.textInput} />
          <TextInput placeholder="Smith" style={styles.textInput} />
          <TextInput placeholder="05/26/1987" style={styles.textInput} />
          <TextInput placeholder="random@gmail.com" style={styles.textInput} />
          <View style={styles.newsLetter}>
            <Switch onValueChange={toggleSwitch} value={newsLetter} />
            <Text style={styles.newsLetterText}>
              Receive our newsletter and promos
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.rentButtonText}>Update Settings</Text>
        </TouchableOpacity>
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
  profilePicture: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceIconStyle: {
    width: 150,
    height: 180,
  },
  formRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10,
  },
  newsLetter: {
    flexDirection: 'row',
    marginTop: 5,
  },
  newsLetterText: {
    paddingTop: 4,
  },
  textInput: {
    backgroundColor: 'white',
    paddingLeft: 10,
  },
  rentButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  actionBar: {
    bottom: 60,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    height: 30,
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 1,
  },
});

export default Settings;
