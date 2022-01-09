import React from 'react';
import {FlatList} from 'react-native';
import IndicatorContainer from '../../containers/IndicatorContainer/IndicatorContainer';

const IndicatorList = ({data}) => {
  return (
    <FlatList
      testID="indicator-list"
      data={data || [null, null, null, null, null, null, null]}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          <IndicatorContainer key={item?.code || index} indicator={item} />
        );
      }}
    />
  );
};

export default IndicatorList;
