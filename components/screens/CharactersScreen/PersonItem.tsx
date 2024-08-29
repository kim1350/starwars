import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, stylesConst} from '../../../constants';
import {Person} from '../../../types/Person';
import PressableAnimation from '../../ui/PressableAnimation';
interface IPersonItem {
  item: Person;
  index?: number;
  onPressItem: (() => void) | undefined;
}
const PersonItem = ({item, onPressItem}: IPersonItem) => {
  const genderColor = {
    male: colors.GREEN,
    female: colors.PURPLE,
    hermaphrodite: colors.YELLOW,
  };
  return (
    <PressableAnimation scaleValue={0.95} onPress={onPressItem}>
      <View style={styles.personItem}>
        <Text style={stylesConst.text_title_18m}>{item?.name}</Text>
        <View style={{flexDirection: 'row', gap: 12}}>
          {!['n/a', 'unknown', 'none'].includes(item?.height) && (
            <View style={{alignItems: 'center'}}>
              <View style={styles.round}>
                <Text>{item?.height}</Text>
              </View>
              <Text>height</Text>
            </View>
          )}
          {!['n/a', 'unknown', 'none'].includes(item?.mass) && (
            <View style={{alignItems: 'center'}}>
              <View style={styles.round}>
                <Text>{item.mass}</Text>
              </View>
              <Text>mass</Text>
            </View>
          )}
        </View>
        <View style={styles.tagContainer}>
          {!['n/a', 'unknown', 'none'].includes(item?.gender) && (
            <View
              style={{
                ...styles.genderContainer,
                backgroundColor:
                  genderColor[item.gender as keyof typeof genderColor],
              }}>
              <Text>{item.gender}</Text>
            </View>
          )}
          {!['n/a', 'unknown', 'none'].includes(item.birth_year) && (
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
    </PressableAnimation>
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
