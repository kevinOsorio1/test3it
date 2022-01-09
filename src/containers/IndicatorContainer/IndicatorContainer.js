import React from 'react';
import Indicator from '../../components/Indicator/Indicator';
import Skeleton from '../../components/Skeleton/Skeleton';
import useIndicatorContainerNavigation from '../../utils/hooks/useIndicatorContainerNavigation';

const IndicatorContainer = ({indicator}) => {
  const {handleClick, handleClickInfo} =
    useIndicatorContainerNavigation(indicator);

  if (!indicator) {
    return <Skeleton />;
  }

  return (
    <Indicator
      clickInfo={handleClickInfo}
      clickItem={handleClick}
      name={indicator.name}
      unit={indicator.unit}
    />
  );
};

export default IndicatorContainer;
