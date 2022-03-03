import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
    margin: 10,
    padding: 3,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {width: 100, height: 100, borderRadius: 10, resizeMode: 'contain'},

  text: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'black',
    marginLeft: 10,
  },
});
