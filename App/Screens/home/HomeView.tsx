import React, {Component} from 'react';
import {View, Text, Button, FlatList, ActivityIndicator} from 'react-native';
import styles from './HomeStyles';
import {useNavigation} from '@react-navigation/native';

const HomeView = props => {
  const {
    goForFetch,
    goForAxios,
    fromFetch,
    fromAxios,
    axiosData,
    renderItem,
    FlatListItemSeparator,
    dataSource,
    loading,
    navigate,
  } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.parentContainer}>
      {
        <FlatList
          data={axiosData}
          horizontal={false}
          numColumns={2}
          key={2}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={item => renderItem(item, navigation)}
          keyExtractor={item => item.id.toString()}
        />
      }
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
          <Text style={{fontSize: 16, color: 'red'}}>Loading Data...</Text>
        </View>
      )}
    </View>
  );
};
export default HomeView;
