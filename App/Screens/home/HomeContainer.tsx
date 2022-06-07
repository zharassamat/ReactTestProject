import React, {useState, useEffect} from 'react';
import ApiView from './HomeView';
import styles from './styles';
import FetchData from './HomeRepository';

import {View, Text, Image, TouchableOpacity} from 'react-native';

function HomeContainer() {
  RenderItem();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data == null) {
      FetchData(setIsLoading, setData);
    }
  });

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
            itemId: 2,
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
