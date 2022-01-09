import {useCallback, useEffect, useState} from 'react';
import Repository from '../../API/Repository/Repository';

export const useHomeView = () => {
  const [indicators, setIndicators] = useState(null);

  const fetchIndicators = useCallback(async () => {
    const data = await Repository.indicators.findAll();
    setIndicators(data);
  }, []);

  const eraseIndicators = useCallback(() => {
    setIndicators(null);
  }, []);

  useEffect(() => {
    fetchIndicators();
    return () => eraseIndicators();
  }, [eraseIndicators, fetchIndicators]);

  return {
    indicators,
    fetchIndicators,
    eraseIndicators,
  };
};
