import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

const useViewHeader = route => {
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        title: route.params.name,
      });
      navigation.getParent().setOptions({headerShown: false});
      return () => {
        navigation.getParent().setOptions({headerShown: true});
        navigation.setOptions({headerShown: false});
      };
    }, [navigation, route]),
  );
};

export default useViewHeader;
