import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, stylesConst} from '../../constants';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>Find all your favorite character</Text>
        <Text style={styles.text}>
          You can find out all the information about your favorite characters
        </Text>
      </View>
      <View style={styles.containerImgs}>
        <Image
          source={require('../../assets/Cloud.png')}
          height={120}
          width={252}
          style={{height: 120, width: 252, position: 'absolute', right: 0}}
        />

        <Image
          source={require('../../assets/Yoda.png')}
          style={{height: 320, aspectRatio: 1}}
        />
        <Image
          source={require('../../assets/Cloud.png')}
          resizeMode="contain"
          style={{
            height: 80,
            width: 168,
            position: 'absolute',
            left: 0,
            bottom: 0,
          }}
        />
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
  container: {flex: 1, padding: 20, backgroundColor: colors.BG},
  container2: {
    gap: 16,
  },
  containerImgs: {
    flex: 1,
    gap: 8,
    alignSelf: 'flex-end',
    marginTop: 12,
  },
});
