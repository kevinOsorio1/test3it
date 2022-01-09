import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

const indicatorStyles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 8,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 8,
    shadowOffset: 10,
    border: '1px solid black',
  },
  content: {
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    width: '65%',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unit: {
    color: Colors.blue400,
    fontSize: 12,
  },
  name: {
    color: Colors.black,
    fontSize: 16,
  },
});

export default indicatorStyles;
