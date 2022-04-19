import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

const {width, height} = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      data: '',
    };
  }
  componentDidMount() {
    const data = this.props.route.params.data;
    this.setState({
      data: data,
    });
  }
  render() {
    return (
      <View
        source={{uri: this.state?.data?.pagemap?.cse_thumbnail[0]?.src}}
        style={styles.ImageStyle}>
        <Text style={styles.textStyle}> {this.state.data.title}</Text>
        <Text style={styles.textSpinet}> {this.state.data.snippet}</Text>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  ImageStyle: {
    width: '100%',
    height: 300,
    borderWidth: 2,
    borderColor: '#d35647',
    resizeMode: 'contain',
    marginTop: 5,
    padding: 2,
  },
  textStyle: {
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#4A148C',
    padding: 10,
  },
  textSpinet: {
    fontSize: 15,
    padding: 10,
  },
});
