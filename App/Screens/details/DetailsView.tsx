import React, {Component} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import styles from './styles';
import {useRoute} from '@react-navigation/native';

const DetailsView = props => {
  const {axiosData, loading} = props;
  const route = useRoute();

  //itemId: route.params.itemId

  return (
    <View style={styles.parentContainer}>
      {!loading && axiosData != null ? (
        <View style={styles.parentContainer}>
          <Text style={styles.textStyle}>{axiosData.name}</Text>
          <Text style={styles.textStyle}>{axiosData.description}</Text>
          <Image
            style={{width: '100%', height: 200}}
            source={{uri: axiosData.poster}}
          />
        </View>
      ) : (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
          <Text style={{fontSize: 16, color: 'red'}}>Loading Data...</Text>
        </View>
      )}
    </View>
  );
};
export default DetailsView;
