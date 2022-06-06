import React, {Component} from 'react';
import ApiView from './ApiView';
import axios from 'axios';
import styles from './ApiStyles';

import {View, Text, Image, TouchableOpacity} from 'react-native';

class ApiContainer extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      fromFetch: false,
      fromAxios: false,
      dataSource: [],
      axiosData: null,
    };
    this.goForAxios();
  }

  goForFetch = () => {
    this.setState({
      fromFetch: true,
      loading: true,
    });
    fetch('https://6299936c7b866a90ec3e0000.mockapi.io/movies/movies')
      .then(response => response.json())
      .then(responseJson => {
        console.log('getting data from fetch', responseJson);
        setTimeout(() => {
          this.setState({
            loading: false,
            dataSource: responseJson,
          });
        }, 2000);
      })
      .catch(error => console.log(error));
  };
  goForAxios = () => {
    this.setState({
      fromFetch: false,
      loading: true,
    });
    axios
      .get('https://6299936c7b866a90ec3e0000.mockapi.io/movies/movies')
      .then(response => {
        console.log('getting data from axios', response.data);
        setTimeout(() => {
          this.setState({
            loading: false,
            axiosData: response.data,
          });
        }, 2000);
      })
      .catch(error => {
        console.log(error);
      });
  };
  FlatListSeparator = () => {
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
  renderItem = (data, navigation) => {
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

  render() {
    const {dataSource, fromFetch, fromAxios, loading, axiosData} = this.state;
    return (
      <ApiView
        goForFetch={this.goForFetch}
        goForAxios={this.goForAxios}
        dataSource={dataSource}
        loading={loading}
        fromFetch={fromFetch}
        fromAxios={fromAxios}
        axiosData={axiosData}
        FlatListSeparator={this.FlatListSeparator}
        renderItem={this.renderItem}
      />
    );
  }
}

export default ApiContainer;
