import React, { Component } from 'react'
import { View, Text, Image, Button, FlatList, ActivityIndicator } from 'react-native';
import styles from './DetailsStyles';
import { useRoute } from '@react-navigation/native';

const DetailsView = (props) => {
    const {itemId, goForAxios, fromFetch, fromAxios, axiosData, renderItem, FlatListItemSeparator, dataSource, loading, navigate } = props
    const route = useRoute();
   
    //itemId: route.params.itemId

    return (
        <View style={styles.parentContainer}>
            { !loading && axiosData != null &&
                 <View style={styles.parentContainer}>
                <Text style={styles.lightText}>{axiosData.name}</Text>
                <Text style={styles.lightText}>{axiosData.description}</Text>
                <Image
                    style={{width: '100%', height: 200}}
                    source={{uri:axiosData.poster}}
                />
                </View>

            }
            {loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text style={{fontSize:16,color:'red'}}>Loading Data...</Text>
                </View>
            }
        </View>
    )
}
export default DetailsView;