import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Switch,
  SafeAreaView,
  CheckBox,
  Button,
} from 'react-native';
import ModalPage from './ModalPage';
import {useSelector, useDispatch} from 'react-redux';
import {onUpdateData, deleteItem} from '../../actions/multiselectcb.action';
// eslint-disable-next-line no-undef
export default function MultiSelectReducer(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const cbDataList = useSelector((state) => {
    return state.multiselectcb;
  });
  const closeThisModal = () => {
    setModalVisible(!modalVisible);
  };

  const deleteItemNow = (id) => {
    dispatch(deleteItem(id));
  };

  /*Update Switch State*/
  const onUpdateValue = (index, id) => {
    dispatch(onUpdateData(index, id));
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
        data={cbDataList.cbList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text>
        {'selected=' + cbDataList?.count + '/' + cbDataList?.cbList?.length}
      </Text>

      <Button
        title={'next'}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      />
      <ModalPage
        isVisible={modalVisible}
        closeModal={closeThisModal}
        dataList={cbDataList.selectedCbData}
        deleteItem={deleteItemNow}
      />
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
