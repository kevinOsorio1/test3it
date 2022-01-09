import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

export const timeLineItemStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 1,
    elevation: 1,
    padding: 10,
  },
  dateContainer: {
    width: '30%',
  },
  valueContainer: {
    width: '30%',
  },
  date: {
    color: Colors.blue400,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {textAlign: 'left', fontWeight: 'bold', fontSize: 16},
});
