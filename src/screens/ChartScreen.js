import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import {LineChart} from 'react-native-chart-kit';
const {width, height} = Dimensions.get('window');
//const screenWidth = Dimensions.get("window").width;
const data = {
  labels: [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      data: [
        20000,
        45000,
        28000,
        8000,
        9900,
        43000,
        5600,
        8700,
        10000,
        50000,
        33000,
        6000,
      ],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ['Spend'], // optional
};
const chartConfig = {
  // backgroundGradientFrom: '#1E2923',
  // backgroundGradientFromOpacity: 0,
  // backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

class ChartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
    };
  }

  componentDidMount() {
    this.props.getAllBillsByYear('2020');
    console.log('==================ChartScreen=', this.props.billsData);
  }
  render() {
    return (
      <View>
        <LineChart
          data={data}
          width={width}
          height={height - 100}
          verticalLabelRotation={60}
          chartConfig={chartConfig}
          bezier
        />
      </View>
    );
  }
}
export default ChartScreen;
ChartScreen.propTpes = {
  getAllBills: PropTypes.func,
  billsData: PropTypes.any,
  getBillLoading: PropTypes.bool,
  getBillError: PropTypes.string,
  getBillStatus: PropTypes.string,
  getBillType: PropTypes.string,
  addNewItem: PropTypes.func,
  getAllBillsByYear: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textSpinet: {
    fontSize: 15,
    padding: 10,
  },
});
