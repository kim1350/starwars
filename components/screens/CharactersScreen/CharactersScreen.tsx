import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {colors, stylesConst} from '../../../constants';
import {getPersons} from '../../../store/presonSlice';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import PersonItem from './PersonItem';
import {Dropdown} from 'react-native-element-dropdown';
const options = [
  {label: 'all', value: 'all'},
  {label: 'brown', value: 'brown'},
  {label: 'red', value: 'red'},
  {label: 'blue', value: 'blue'},
  {label: 'white', value: 'white'},
];
const CharactersScreen = () => {
  const dispatch = useAppDispatch();
  const {data, error, loadData, next} = useAppSelector(state => state.preson);
  const [page, setPage] = useState<number>(1);
  const [select, setSelect] = useState<string>('all');
  const [isRefetching, setIsRefetching] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getPersons(page));
  }, []);

  const getNextData = () => {
    if (loadData) {
      return;
    }
    if (next) {
      dispatch(getPersons(page + 1));
      setPage(page + 1);
    }
  };
  const handleRefetch = () => {
    setIsRefetching(true);
    setPage(1);
    dispatch(getPersons(1)).finally(() => {
      setIsRefetching(false);
    });
  };

  const filteredData = useMemo(() => {
    return select === 'all'
      ? data
      : data.filter(person => person?.eye_color === select);
  }, [select, data]);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Dropdown
        data={options}
        labelField="label"
        valueField="value"
        onChange={({value}) => {
          setSelect(value);
        }}
        value={select}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
      />

      <FlatList
        ListHeaderComponent={
          <Text style={styles.title}>
            60 Peoples for you to choose your favorite
          </Text>
        }
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={handleRefetch} />
        }
        data={filteredData}
        ListFooterComponent={
          next != null ? (
            <TouchableOpacity onPress={getNextData}>
              <Text style={stylesConst.text_title_16m}>Load more...</Text>
            </TouchableOpacity>
          ) : undefined
        }
        keyExtractor={(item, index) => item.created + '' + index}
        contentContainerStyle={{gap: 12, padding: 20}}
        ListEmptyComponent={loadData ? <ActivityIndicator size={40} /> : null}
        renderItem={({item, index}) => {
          return <PersonItem item={item} index={index} />;
        }}
      />
    </View>
  );
};

export default CharactersScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.WHITE},
  dropdownContainer: {
    borderRadius: 12,
  },
  container2: {
    gap: 16,
  },
  title: {
    ...stylesConst.text_title_22m,
    textAlign: 'center',
  },
  dropdown: {
    width: 200,
    marginLeft: 20,
    marginTop: 12,
    borderColor: colors.BORDER_GRAY,
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: colors.WHITE,
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
  itemContainer: {
    height: 44,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  personItem: {
    flex: 1,
    backgroundColor: colors.BG2,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
});
