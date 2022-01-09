import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import Repository from '../../API/Repository/Repository';

const useIndicatorView = route => {
  const [indicator, setIndicator] = useState();

  const fetchIndicatorByCode = useCallback(async () => {
    const response = await Repository.indicators.findOneByName(
      route.params.code,
    );
    if (response) {
      setIndicator(response);
    }
  }, [route.params.code]);
  useFocusEffect(
    useCallback(() => {
      fetchIndicatorByCode();
      return () => setIndicator(null);
    }, [fetchIndicatorByCode]),
  );
  return {indicator, fetchIndicatorByCode};
};

export default useIndicatorView;
