import React, {useReducer} from 'react';
import {View, StyleSheet, Text, SafeAreaView, Button} from 'react-native';
import myReducer from './myReducer';
export default function MainScreen(props) {
  const [state, dispatch] = useReducer(myReducer, {count: 1});
  console.log('=======MainScreen==', state);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{'Welcome to Tutorial'}</Text>
        <Text>{state.count}</Text>
        <Button
          title={'Increment'}
          onPress={() => {
            dispatch({type: 'add'});
          }}
        />
        <View style={{margin: 20}} />
        <Button
          title={'Decrement'}
          onPress={() => {
            dispatch({type: 'minus'});
          }}
        />
        <View style={{margin: 20}} />
        <Button
          title={'Next'}
          onPress={() => {
            props.navigation.navigate('SecondPage');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC55',
  },
  tabHeading: {
    padding: 20,
    flexDirection: 'row',
  },
  title: {
    textTransform: 'capitalize',
  },
});
