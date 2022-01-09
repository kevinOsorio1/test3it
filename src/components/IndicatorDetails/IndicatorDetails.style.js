import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

export const indicatorDetailsStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 16,
  },
  title: {
    fontSize: 30,
    color: Colors.blueA200,
    paddingVertical: 8,
  },
});
