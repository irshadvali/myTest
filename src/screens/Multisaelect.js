/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState, useEffect} from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import SelectMultiple from './custom/SelectMultiple';

// const fruits = ['Apples', 'Oranges', 'Pears', 'Banana'];
// --- OR ---
const fruits = [
  {label: 'Apples', value: 'appls', id: 1},
  {label: 'Oranges', value: 'orngs', id: 2},
  {label: 'Pears', value: 'pears', id: 3},
];

const renderLabel = (label, style, id) => {
    console.log("======",label,id)
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        style={{width: 42, height: 42}}
        source={{uri: 'https://dummyimage.com/100x100/52c25a/fff&text=S'}}
      />
      <View style={{marginLeft: 10}}>
        <Text style={style}>
          {label}
          {id}
        </Text>
      </View>
    </View>
  );
};

// class Multisaelect extends Component {
// //const [selectedFruits, setSelectedFruits]=useState([])
//   state = {selectedFruits: []};

//   onSelectionsChange = (selectedFruits) => {
//     //setSelectedFruits(selectedFruits);
//     // selectedFruits is array of { label, value }
//     this.setState({selectedFruits});
//   };

//   render() {
//     return (
//       <View>
//         <SelectMultiple
//           items={fruits}
//           renderLabel={renderLabel}
//           selectedItems={this.state.selectedFruits}
//           onSelectionsChange={this.onSelectionsChange}
//         />
//         <Text>{this.state?.selectedFruits.length+"/"+fruits.length}</Text>
//       </View>
//     );
//   }
// }
const Multisaelect = () => {
  const [selectedFruits, setSelecetdFruits] = useState([]);
  const onSelectionsChange = (selected) => {
    setSelecetdFruits(selected);
  };
  return (
    <View style={styles.container}>
      <Button
        title={'click'}
        onPress={() => console.log('=====', selectedFruits)}
      />
      <SelectMultiple
        items={fruits}
        selectedItems={selectedFruits}
        onSelectionsChange={onSelectionsChange}
        renderLabel={renderLabel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 26,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default Multisaelect;
