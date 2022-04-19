import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

const screenList = [
  {
    id: '1',
    title: 'AllBillsConatiner',
    name: 'AllBillsConatiner',
  },
  {
    id: '2',
    title: 'MyMap',
    name: 'MyMap',
  },
  {
    id: '3',
    title: 'MapOpenTwo',
    name: 'MapOpenTwo',
  },
  {
    id: '4',
    title: 'OpenMapAA',
    name: 'OpenMapAA',
  },
  {
    id: '5',
    title: 'ZoomImage',
    name: 'ZoomImage',
  },
  {
    id: '6',
    title: 'Multisaelect',
    name: 'Multisaelect',
  },
  {
    id: '7',
    title: 'MultiSelect',
    name: 'MultiSelect',
  },
  {
    id: '8',
    title: 'SocialPage',
    name: 'SocialPage',
  },
  {
    id: '9',
    title: 'HooksReducerTest',
    name: 'HooksReducerTest',
  },
  {
    id: '10',
    title: 'MultiSelectReducer',
    name: 'MultiSelectReducer',
  },
  {
    id: '11',
    title: 'MainScreen',
    name: 'MainScreen',
  },
  {
    id: '12',
    title: 'UseRefExample',
    name: 'UseRefExample',
  },
];

const HomePage = (props) => {
  const Item = ({title}) => {
    return (
      <View>
        <Text style={styles.textColor}>{title}</Text>
      </View>
    );
  };
  //const renderItem = ({item}) => <Item title={item.title} />;
  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(item.name);
          }}>
          <Item title={item.title} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={screenList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 2,
  },
  item: {
    backgroundColor: 'green',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  textColor: {
    color: '#ffffff',
    fontSize: 20,
  },
});
export default HomePage;
