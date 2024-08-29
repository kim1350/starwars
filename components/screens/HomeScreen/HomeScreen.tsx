import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, stylesConst} from '../../../constants';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>Find all your favorite character</Text>
        <Text style={styles.text}>
          You can find out all the information about your favorite characters
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Characters');
        }}
        style={styles.btn}>
        <Text style={stylesConst.text_title_18m}>See more...</Text>
      </TouchableOpacity>
      <View style={styles.containerImgs}>
        <Image
          source={require('../../../assets/Cloud.png')}
          height={120}
          width={252}
          style={styles.cloud1}
        />

        <Image
          source={require('../../../assets/Yoda.png')}
          style={styles.yoda}
        />
        <Image
          source={require('../../../assets/Cloud.png')}
          resizeMode="contain"
          style={styles.cloud2}
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  cloud1: {
    height: 120,
    width: 252,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  cloud2: {
    height: 80,
    width: 168,
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  yoda: {
    height: 320,
    width: 320,
    position: 'relative',
    zIndex: 2,
  },
  btn: {
    marginTop: 22,
    paddingVertical: 12,
    justifyContent: 'center',
    borderRadius: 12,
    alignItems: 'center',
    width: 200,
    backgroundColor: colors.YELLOW,
  },
});
