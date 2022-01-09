import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import TimeLineItem from '../../components/TimeLineItem/TimeLineItem';

const TimeLine = ({data, prefix}) => {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <TimeLineItem
          key={item.date}
          date={item.date}
          prefix={prefix}
          value={item.value}
        />
      )}
    />
  );
};

export default TimeLine;
