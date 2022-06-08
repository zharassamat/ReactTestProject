import React, {Component} from 'react';
import DetailsView from './DetailsView';
import { useGetMockDataByIdQuery } from '../../data/services/Api';
import {useRoute} from '@react-navigation/native';

function DetailsContainer() {
  const route = useRoute();
  const { data, error, isLoading } = useGetMockDataByIdQuery(route.params.itemId);
  
  return (
    <DetailsView
        loading={isLoading}
        axiosData={data}
      />
  );
}

export default DetailsContainer;
