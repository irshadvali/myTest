import React, {Component} from 'react';
import {StyleSheet, View, Button, Text, TouchableHighlight} from 'react-native';
import {Popup, showLocation} from 'react-native-map-link';

const options = {
//   latitude: 12.985064080110583,
//   longitude: 80.24589945419072,
  latitude: 12.852215702264141,
  longitude: 77.66376704233866,
  title:
    'Altimetrik India Pvt. Ltd. # 7-P, 93-P, West,, Electronic City, Bengaluru, Karnataka 560100',
  dialogTitle: 'This is the dialog Title',
  dialogMessage: 'This is the amazing dialog Message',
  cancelText: 'This is the cancel button text',
};

const onFootOptions = {
  ...options,
  sourceLatitude: 12.985064080110583,
  sourceLongitude: 80.24589945419072,
  directionsMode: 'walk',
};
export default class MapOpenTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        {/* <Popup
          isVisible={this.state.isVisible}
          onCancelPressed={() => this.setState({isVisible: false})}
          onAppPressed={() => this.setState({isVisible: false})}
          onBackButtonPressed={() => this.setState({isVisible: false})}
          options={options}
        /> */}

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => showLocation(options)}
            title="Show in Maps using action sheet"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => showLocation(onFootOptions)}
            title="Show direction (on foot) in Maps using action sheet"
          />
        </View>

        <Button
          onPress={() => {
            this.setState({isVisible: true});
          }}
          title="Show in Maps using Popup"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});
