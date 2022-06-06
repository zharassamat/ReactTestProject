import React, {Component} from 'react';
import DetailsView from './DetailsView';
import axios from 'axios';
import styles from './DetailsStyles';

import {View, Text, Image, TouchableOpacity} from 'react-native';

class DetailsContainer extends Component<any, any> {
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

  goForAxios = () => {
    this.setState({
      fromFetch: false,
      loading: true,
    });
    axios
      .get('https://6299936c7b866a90ec3e0000.mockapi.io/movies/movies/1')
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
  renderItem = data => {
    return (
      <TouchableOpacity style={styles.list} onPress={() => {}}>
        <Text style={styles.textStyle}>{data.name}</Text>
        <Text style={styles.textStyle}>{data.description}</Text>
        <Image
          style={{width: '100%', height: 200}}
          source={{uri: data.item.poster}}
        />
      </TouchableOpacity>
    );
  };

  render() {
    const {dataSource, fromFetch, fromAxios, loading, axiosData} =
      this.state;
    return (
      <DetailsView
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

export default DetailsContainer;
