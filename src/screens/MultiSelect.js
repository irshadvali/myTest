import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Switch,
  SafeAreaView,
  CheckBox
} from 'react-native';

// eslint-disable-next-line no-undef
export default function MultiSelect(props) {
  const [data, setData] = useState([
    {label: 'temperature', id: 101},
    {label: 'humidity', id: 102},
    {label: 'light', id: 103},
    {label: 'light', id: 104},
    {label: 'move', id: 105},
    {label: 'sound', id: 106},
    {label: 'carbon dioxide', id: 107},
    {label: 'air pollution', id: 108},
  ]);

  const [count, setCount] = useState(0);
  /*Update Switch State*/
  const onUpdateValue = (index, id) => {
    console.log(id, '==ww=====', index);
    data[index].selected = id;
    const count1 = [...data].filter((value) => value.selected).length;
    console.log(
      '=========',
      [...data].filter((value) => value.selected),
    );
    setCount(count1);
    return setData([...data]);
  };
  /*Item Renderer*/
  const renderItem = ({item, index}) => (
    <ItemRenderer
      selected={item.selected}
      index={index}
      id={item.id}
      onUpdateValue={onUpdateValue}
      item={item}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text>{'selected=' + count + '/' + data.length}</Text>
    </SafeAreaView>
  );
};

const ItemRenderer = ({index, selected, onUpdateValue, item}) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      {item.label} {item.id}
    </Text>
    <CheckBox
      value={selected}
      onValueChange={(value) => onUpdateValue(index, value)}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
