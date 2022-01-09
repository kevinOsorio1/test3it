import React from 'react';
import TimeLine from '../../containers/TimeLine/TimeLine';
import {SafeAreaView} from 'react-native';
import useViewHeader from '../../utils/hooks/useViewHeader';
import useIndicatorView from '../../utils/hooks/useIndicatorView';

const IndicatorTimeLine = ({route}) => {
  useViewHeader(route);
  const {indicator} = useIndicatorView(route);
  return (
    <SafeAreaView style={{flex: 1}}>
      <TimeLine prefix={indicator?.prefix} data={indicator?.serie || []} />
    </SafeAreaView>
  );
};

export default IndicatorTimeLine;
