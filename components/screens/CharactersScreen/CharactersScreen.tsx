import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, stylesConst} from '../../../constants';
import {getPersons} from '../../../store/presonSlice';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import PersonItem from './PersonItem';

const CharactersScreen = () => {
  const dispatch = useAppDispatch();
  const {data, error, loadData, next} = useAppSelector(state => state.preson);
  const [page, setPage] = useState<number>(1);
  const [isRefetching, setIsRefetching] = useState<boolean>(false);
  useEffect(() => {
    dispatch(getPersons(page));
  }, []);

  const getNextData = () => {
    if (next) {
      dispatch(getPersons(page + 1));
      setPage(page + 1);
    }
  };
  const handleRefetch = () => {
    setIsRefetching(true);
    dispatch(getPersons(1)).finally(() => {
      setIsRefetching(false);
    });
  };
  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.title}>
            60 Peoples for you to choose your favorite
          </Text>
        }
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={handleRefetch} />
        }
        ListFooterComponent={
          !isRefetching && loadData && data.length > 0 ? (
            <ActivityIndicator size={32} />
          ) : null
        }
        data={data}
        keyExtractor={(item, index) => item.created + '' + index}
        contentContainerStyle={{gap: 12, padding: 20}}
        initialNumToRender={10}
        onEndReachedThreshold={0.8}
        onEndReached={getNextData}
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
