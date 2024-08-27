import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors, stylesConst} from '../../constants';
import {getPersons} from '../../store/presonSlice';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';

const CharactersScreen = () => {
  const dispatch = useAppDispatch();
  const {data, error, loadData} = useAppSelector(state => state.preson);
  useEffect(() => {
    dispatch(getPersons(1));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        60 Peoples for you to choose your favorite
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.created + '' + index}
        contentContainerStyle={{gap: 12}}
        ListEmptyComponent={loadData ? <ActivityIndicator size={32} /> : null}
        renderItem={({item, index}) => {
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
        }}
      />
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
  round: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 4,
    borderColor: colors.BLACK21,
  },
  personItem: {
    flex: 1,
    backgroundColor: colors.BG2,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
});
