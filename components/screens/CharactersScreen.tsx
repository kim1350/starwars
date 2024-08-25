import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants';

const CharactersScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CharactersScreen</Text>
    </View>
  );
};

export default CharactersScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: colors.BG},
  container2: {
    gap: 16,
  },
});
