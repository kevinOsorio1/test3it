import React from 'react';
import IndicatorDetails from '../../components/IndicatorDetails/IndicatorDetails';
import {ScrollView} from 'react-native';
import IndicatorChart from '../../containers/IndicatorChart/IndicatorChart';
import useIndicatorView from '../../utils/hooks/useIndicatorView';
import useViewHeader from '../../utils/hooks/useViewHeader';

const IndicatorDetailsView = ({route}) => {
  const {indicator} = useIndicatorView(route);
  useViewHeader(route);

  return (
    <ScrollView style={{flex: 1}}>
      <IndicatorDetails indicator={indicator} />
      {indicator && <IndicatorChart indicator={indicator} />}
    </ScrollView>
  );
};

export default IndicatorDetailsView;
