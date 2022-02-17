import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Button,
  Text,
  View,
  CheckBox,
} from 'react-native';

const ModalComponent = (props) => {
  const ItemRenderer = ({index, selected, onUpdateValue, item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {item.label} {item.id}
      </Text>
      <Button
        title={'Delete'}
        onPress={() => {
          props.deleteItem(item.id);
        }}
      />
    </View>
  );
  return (
    <Modal
      animationType={'slide'}
      transparent={false}
      visible={props.isVisible}>
      <Text style={styles.text}>{'Selected Data.'}</Text>
      <FlatList
        data={props.dataList}
        renderItem={ItemRenderer}
        keyExtractor={(item) => item.id}
      />
      <Button
        title={'Close'}
        onPress={() => {
          props.closeModal();
        }}
        props={props}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#d00000',
    zIndex: 1000,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#d00000',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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

export default ModalComponent;
