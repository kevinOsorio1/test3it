import React from 'react';
import {SafeAreaView} from 'react-native';
import IndicatorList from '../../components/IndicatorList/IndicatorList';
import {useHomeView} from '../../utils/hooks/useHomeView';

const Home = () => {
  const {indicators} = useHomeView();
  return (
    <SafeAreaView style={{flex: 1}}>
      <IndicatorList data={indicators} />
    </SafeAreaView>
  );
};

export default Home;
