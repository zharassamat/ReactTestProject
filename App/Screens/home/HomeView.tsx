import React, {Component} from 'react';
import {View, Text, Button, FlatList, ActivityIndicator} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const HomeView = props => {
  const {data, renderItem, FlatListItemSeparator, loading} = props;
  const navigation = useNavigation();

  return (
    <View style={styles.parentContainer}>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
          <Text style={{fontSize: 16, color: 'red'}}>Loading Data...</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          horizontal={false}
          numColumns={2}
          key={2}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={item => renderItem(item, navigation)}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};
export default HomeView;
