import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {add, minus} from '../actions/testhooks.action';
const HooksReducerNextPage = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.testhooks.count;
  });
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{'count'}</Text>
      <Text>{count}</Text>
      <Button
        title={'Increment'}
        onPress={() => {
          dispatch(add());
        }}
      />
      <View style={{marginTop: 5}} />
      <Button
        title={'Decrement'}
        onPress={() => {
          dispatch(minus());
        }}
      />
    </View>
  );
};
export default HooksReducerNextPage;
