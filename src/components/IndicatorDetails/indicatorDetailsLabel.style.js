import {StyleSheet} from 'react-native';

export const indicatorDetailsLabelStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginVertical: 8,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
  },
  value: {
    alignSelf: 'flex-end',
    elevation: 8,
    width: '59%',
  },
  text: {
    textAlign: 'right',
    padding: 2,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
