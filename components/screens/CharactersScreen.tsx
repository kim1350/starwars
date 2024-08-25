import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, stylesConst} from '../../constants';

const CharactersScreen = () => {
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
