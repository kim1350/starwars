import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors, stylesConst} from '../../constants';
import axiosInstance from '../../hooks/api';

const CharactersScreen = () => {
  const getPeoples = async () => {
    try {
      const res = await axiosInstance.get('people/');
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPeoples();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        60 Peoples for you to choose your favorite
      </Text>
    </View>
  );
};

export default CharactersScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: colors.WHITE},
  container2: {
    gap: 16,
  },
  title: {
    ...stylesConst.text_title_22m,
    textAlign: 'center',
  },
});
