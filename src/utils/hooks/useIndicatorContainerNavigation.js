import {useNavigation} from '@react-navigation/native';

const useIndicatorContainerNavigation = indicator => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('TimeLine', {
      code: indicator.code,
      name: indicator.name,
    });
  };
  const handleClickInfo = () => {
    navigation.navigate('Detalle', {
      code: indicator.code,
      name: indicator.name,
    });
  };

  return {handleClick, handleClickInfo};
};

export default useIndicatorContainerNavigation;
