import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, stylesConst} from '../../../constants';
import {Person} from '../../../types/Person';
interface IPersonItem {
  item: Person;
  index: number;
}
const PersonItem = ({item}: IPersonItem) => {
  const genderColor = {
    male: colors.GREEN,
    female: colors.PURPLE,
    hermaphrodite: colors.YELLOW,
  };
  return (
    <View style={styles.personItem}>
      <Text style={stylesConst.text_title_18m}>{item?.name}</Text>
      <View style={{flexDirection: 'row', gap: 12}}>
        {item?.height != 'n/a' &&
          item?.height != 'unknown' &&
          item?.height != 'none' && (
            <View style={{alignItems: 'center'}}>
              <View style={styles.round}>
                <Text>{item?.height}</Text>
              </View>
              <Text>height</Text>
            </View>
          )}
        {item?.mass != 'n/a' &&
          item?.mass != 'unknown' &&
          item?.mass != 'none' && (
            <View style={{alignItems: 'center'}}>
              <View style={styles.round}>
                <Text>{item?.mass}</Text>
              </View>
              <Text>mass</Text>
            </View>
          )}
      </View>
      <View style={styles.tagContainer}>
        {item?.gender != 'n/a' &&
          item?.gender != 'unknown' &&
          item?.gender != 'none' && (
            <View
              style={{
                ...styles.genderContainer,
                backgroundColor:
                  genderColor[item.gender as keyof typeof genderColor],
              }}>
              <Text>{item?.gender}</Text>
            </View>
          )}
        {item?.birth_year != 'n/a' &&
          item?.birth_year != 'unknown' &&
          item?.birth_year != 'none' && (
            <View
              style={{
                ...styles.genderContainer,
                backgroundColor: colors.BLUE,
              }}>
              <Text>{item?.birth_year}</Text>
            </View>
          )}
      </View>
    </View>
  );
};

export default PersonItem;

const styles = StyleSheet.create({
  personItem: {
    flex: 1,
    gap: 12,
    backgroundColor: colors.BG2,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  tagContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  genderContainer: {
    borderRadius: 12,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
  },
  round: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 4,
    borderColor: colors.BLACK21,
  },
});
