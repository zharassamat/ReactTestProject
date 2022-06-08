import React, {useState, useEffect} from 'react';
import ApiView from './HomeView';
import styles from './styles';
import FetchData from './HomeRepository';
import { useGetMockDataQuery } from '../../data/services/Api';

import {View, Text, Image, TouchableOpacity} from 'react-native';

function HomeContainer() {
  RenderItem();
  const { data, error, isLoading } = useGetMockDataQuery('movies');

  return (
    <ApiView
      loading={isLoading}
      data={data}
      renderItem={this.renderItem}
    />
  );
}

function RenderItem() {
  this.renderItem = (data, navigation) => {
    return (
      <TouchableOpacity
        style={styles.list}
        onPress={() => {
          navigation.navigate('Details', {
            itemId: data.item.id,
          });
        }}>
        <Text style={styles.textStyle}>{data.item.name}</Text>
        <Text style={styles.textStyle}>{data.item.rating}</Text>
        <Image
          style={{width: '100%', height: 200}}
          source={{uri: data.item.poster}}
        />
      </TouchableOpacity>
    );
  };
}

export default HomeContainer;
