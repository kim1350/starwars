import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, stylesConst} from '../../constants';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, padding: 20, backgroundColor: colors.BG}}>
      <View style={{gap: 16}}>
        <Text style={styles.title}>Find all your favorite character</Text>
        <Text style={styles.text}>
          You can find out all the information about your favorite characters
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    ...stylesConst.text_title_32m,
    color: colors.WHITE,
  },
  text: {
    ...stylesConst.text_title_22r,
    color: colors.WHITE,
  },
});
