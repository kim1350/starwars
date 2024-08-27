import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, stylesConst} from '../../../constants';
import {Person} from '../../../types/Person';
interface IPersonItem {
  item: Person;
  index: number;
}
const PersonItem = ({item, index}: IPersonItem) => {
  return (
    <View style={styles.personItem}>
      <Text style={stylesConst.text_title_18m}>{item.name}</Text>
      <View style={{flexDirection: 'row', gap: 12}}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.round}>
            <Text>{item?.height}</Text>
          </View>
          <Text>height</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.round}>
            <Text>{item?.mass}</Text>
          </View>
          <Text>mass</Text>
        </View>
      </View>
      <Text>{item?.gender}</Text>
    </View>
  );
};

export default PersonItem;

const styles = StyleSheet.create({
  personItem: {
    flex: 1,
    backgroundColor: colors.BG2,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
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
