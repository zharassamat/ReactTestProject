import React, {useState, useEffect} from 'react';
import ApiView from './HomeView';
import axios from 'axios';
import styles from './HomeStyles';
import getSampleData from './HomeRepository';

import {View, Text, Image, TouchableOpacity} from 'react-native';

function HomeContainer() {
  FileSeperate()
  RenderItem()

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      axios
        .get('https://6299936c7b866a90ec3e0000.mockapi.io/movies/movies')
        .then(response => {
          console.log('getting data from axios', response.data);
          setTimeout(() => {
            setIsLoading(false);
            setData(response.data)
          }, 2000);
        })
        .catch(error => {
          setIsLoading(false);
          console.log(error);
        });
    };
    fetchData()
  });

  

   return  <ApiView
        loading={isLoading}
        data={data}
        FlatListSeparator={this.FlatListSeparator}
        renderItem={this.renderItem}
      />
  }

  function FileSeperate() {
    this.FlatListSeparator = () => {
      return (
        <View
          style={{
            height: 0.5,
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        />
      );
    };
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
