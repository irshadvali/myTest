/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
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
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            flex: 1,
          }}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              this.props.getAllBillsByYear('2020');
            }}>
            <Text style={styles.buttonTex}>2020</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              this.props.getAllBillsByYear('2021');
            }}>
            <Text style={styles.buttonTex}>2021</Text>
          </TouchableOpacity>
        </View>
        {this.props.graphData ? (
          <LineChart
            data={this.props.graphData}
            width={width}
            height={height - 200}
            verticalLabelRotation={60}
            chartConfig={chartConfig}
            bezier
          />
        ) : (
          <Text>llll</Text>
        )}
      </View>
    );
  }
}
export default ChartScreen;
ChartScreen.propTpes = {
  graphData: PropTypes.any,
  graphLoading: PropTypes.bool,
  graphError: PropTypes.string,
  graphStatus: PropTypes.string,
  graphType: PropTypes.string,

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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  buttonStyle: {
    flex: 1,
    height: 50,
    backgroundColor: '#1A237E',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
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
});
