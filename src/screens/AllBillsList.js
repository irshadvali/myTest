/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableHighlight,
  Alert,
} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import DatePicker from 'react-native-datepicker';
const {width, height} = Dimensions.get('window');
const filterData = ['category', 'description', 'amount', 'date'];
class AllBillsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      data: '',
      modalVisible: false,
      filterModelVisible: false,
      date: moment().format('MM-DD-YYYY'),
      description: '',
      category: '',
      amount: 0,
      filterName: 'category',
    };
  }

  componentDidMount() {
    console.log('============', moment('01-18-2020').format('DD MMM YYYY'));
    this.props.getAllBills(this.state.filterName);
  }
  setCategoryValue = (val) => {
    this.setState({
      category: val,
    });
  };
  setDescriptionValue = (val) => {
    this.setState({
      description: val,
    });
  };
  setAmountValue = (val) => {
    this.setState({
      amount: val,
    });
  };
  addItem = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  sendItemData = () => {
    let initialValue = 0;
    // console.log('==================in initialValue=', initialValue);
    if (
      this.state.description.length > 0 &&
      this.state.category.length > 0 &&
      this.state.amount > 0
    ) {
      let newItem = [
        {
          id: Math.floor(Math.random() * 1000) + 1,
          description: this.state.description,
          category: this.state.category,
          amount: parseInt(this.state.amount, 10),
          date: this.state.date,
        },
      ];
      let allData = [...this.props.billsData, ...newItem];
      //moment('10-20-2010').isSame('10-21-2010','month');
      //word.date === this.state.date
      //moment(word.date).isSame(this.state.date, 'month') === true
      const result = allData.filter(
        (word) => moment(word.date).isSame(this.state.date, 'month') === true,
      );
      // console.log(this.state.date, '==================in result=', result);
      let amountForMonth = result.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount,
        initialValue,
      );
      //  console.log('==================in 4=', amountForMonth);
      if (amountForMonth > 50000) {
        Alert.alert(
          `For a month amount should not above 50000, ${
            amountForMonth - 50000
          } amount is more. `,
        );
      } else {
        this.props.addNewItem(newItem, this.state.filterName, this.state.date);
      }

      this.setState({
        description: '',
        category: '',
        amount: 0,
      });
      this.setState({
        modalVisible: !this.state.modalVisible,
      });
    } else {
      Alert.alert('Please fill bill details');
    }
  };

  renderListView = (item) => {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.viewOne}>
          <Text style={styles.textStyle}>{item.category.toUpperCase()}</Text>
          <Text style={styles.dateText}>
            {moment(item.date).format('DD MMM YYYY')}
          </Text>
        </View>
        <View style={styles.viewOne}>
          <Text style={styles.textDiscription}>
            {item.description.toUpperCase()}
          </Text>
          <Text style={styles.amount}>{`₹ ${item.amount}`}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View styles={styles.container}>
        <ScrollView>
          <FlatList
            contentContainerStyle={{padding: 5}}
            data={this.props.billsData}
            renderItem={({item}) => this.renderListView(item)}
          />
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                // Alert.alert('=======================');
                this.setState({
                  filterModelVisible: !this.state.filterModelVisible,
                });
              }}>
              <Text style={styles.buttonTex}>
                Fliter by {this.state.filterName}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                this.addItem();
              }}>
              <Text style={styles.buttonTex}>Add Item</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                // Alert.alert('=======================');
                this.props.navigation.navigate('ChartScreen', {});
              }}>
              <Text style={styles.buttonTex}>Chart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Add your bills!</Text>
              <Input
                placeholder="Enter bill category"
                returnKeyType={'done'}
                autoCapitalize={'none'}
                autoCorrect={false}
                maxLength={30}
                onChangeText={(val) => this.setCategoryValue(val)}
              />
              <View style={{marginTop: 10}} />
              <Input
                placeholder="Enter bill description"
                returnKeyType={'done'}
                autoCapitalize={'none'}
                autoCorrect={false}
                maxLength={30}
                onChangeText={(val) => this.setDescriptionValue(val)}
              />
              <View style={{marginTop: 10}} />
              <Input
                placeholder="Enter bill amount"
                returnKeyType={'done'}
                autoCapitalize={'none'}
                autoCorrect={false}
                maxLength={30}
                onChangeText={(val) => this.setAmountValue(val)}
              />
              <View style={{marginTop: 10}} />

              <DatePicker
                style={{width: '100%'}}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="MM-DD-YYYY"
                minDate="01-01-2020"
                maxDate="12-31-2021"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {
                  this.setState({date: date});
                }}
              />
              <View style={{marginTop: 10}} />

              <TouchableOpacity
                style={styles.openButton}
                onPress={() => {
                  this.sendItemData();
                }}>
                <Text style={styles.textStyle}>Submit Data</Text>
              </TouchableOpacity>
              <View style={{marginTop: 10}} />
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    modalVisible: !this.state.modalVisible,
                  });
                }}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.filterModelVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.filterItem}
                onPress={() => {
                  this.setState({
                    filterModelVisible: !this.state.filterModelVisible,
                    filterName: filterData[0],
                  });
                  this.props.sortedBy(filterData[0]);
                }}>
                <Text style={styles.itemText}>
                  {filterData[0].toUpperCase()}
                </Text>
              </TouchableOpacity>
              <View style={{marginTop: 10}} />
              <TouchableOpacity
                style={styles.filterItem}
                onPress={() => {
                  this.setState({
                    filterModelVisible: !this.state.filterModelVisible,
                    filterName: filterData[1],
                  });
                  this.props.sortedBy(filterData[1]);
                }}>
                <Text style={styles.itemText}>
                  {filterData[1].toUpperCase()}
                </Text>
              </TouchableOpacity>
              <View style={{marginTop: 10}} />
              <TouchableOpacity
                style={styles.filterItem}
                onPress={() => {
                  this.setState({
                    filterModelVisible: !this.state.filterModelVisible,
                    filterName: filterData[2],
                  });
                  this.props.sortedBy(filterData[2]);
                }}>
                <Text style={styles.itemText}>
                  {filterData[2].toUpperCase()}
                </Text>
              </TouchableOpacity>
              <View style={{marginTop: 10}} />
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    filterModelVisible: !this.state.filterModelVisible,
                  });
                }}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
export default AllBillsList;

AllBillsList.propTpes = {
  getAllBills: PropTypes.func,
  billsData: PropTypes.any,
  getBillLoading: PropTypes.bool,
  getBillError: PropTypes.string,
  getBillStatus: PropTypes.string,
  getBillType: PropTypes.string,
  addNewItem: PropTypes.func,
  sortedBy: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#d00000',
    margin: 10,
    paddingBottom: 30,
  },
  viewStyle: {
    width: '100%',
    height: 70,
    borderWidth: 2,
    borderColor: '#d0d0d0',
    resizeMode: 'contain',
    marginTop: 5,
    padding: 10,
    borderRadius: 2,
  },
  textStyle: {
    fontSize: 16,
    color: '#4A148C',
  },
  textDiscription: {
    fontSize: 15,
    color: '#333333',
  },
  viewOne: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amount: {
    fontSize: 16,
    color: '#C70039',
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 15,
    color: '#333333',
    fontStyle: 'italic',
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  buttonTex: {
    fontSize: 15,
    color: '#ffffff',
  },
  buttonStyle: {
    width: 125,
    height: 50,
    backgroundColor: '#1A237E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 300,
    height: 400,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 40,
    elevation: 2,
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  cancelText: {
    marginBottom: 15,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#d00000',
  },
  filterItem: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: 200,
    height: 40,
    borderColor: '#333333',
    elevation: 2,
    justifyContent: 'center',
  },
  itemText: {
    alignSelf: 'center',
  },
});
