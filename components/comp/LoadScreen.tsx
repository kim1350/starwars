import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';

const LoadScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={40} />
    </View>
  );
};

export default LoadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
