import React, {Component} from 'react';
import {StyleSheet, View, Button, Text, TouchableHighlight} from 'react-native';
import OpenMap from 'react-native-open-map';
// import openMap from 'react-native-open-maps';
// import {createOpenLink} from 'react-native-open-maps';
// const yosemite = {latitude: 12.852215702264141, longitude: 77.66376704233866};
// const openYosemite = createOpenLink(yosemite);
// const openYosemiteZoomedOut = createOpenLink({
//   ...yosemite,
//   zoom: 10,
//   query: 'Altimetrik',
// });
export default class OpenMapAA extends Component {
  // _goToYosemite() {
  //   openMap({latitude: 12.852215702264141, longitude: 77.66376704233866});
  // }
  //12.852215702264141, 77.66376704233866
  // createOpenLink({ latitude: 12.852215702264141, longitude: 77.66376704233866, query: 'Altimetrik EC', zoom: 0 }
  //12.985064080110583, 80.24589945419072
  openA = () => {
    OpenMap.show({
      latitude: 12.985064080110583,
      longitude: 80.24589945419072,
    });
  };

  openB = () => {
    OpenMap.show({
      // latitude: 12.852215702264141,
      // longitude: 77.66376704233866,
      latitude: 12.985064080110583,
      longitude: 80.24589945419072,
      title: 'Altimetrik EC',
      cancelText: 'Close',
      actionSheetTitle: 'Chose app',
      actionSheetMessage: 'Available applications',
    });
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text>kkk</Text>

        {/* <Button
          color={'#bdc3c7'}
        //   onPress={this._goToYosemite}
          title="Click To Open Maps 🗺"
        />
        ); */}
        {/* <Button title="Click To Open Maps" onPress={openYosemite} />
        <Button
          title="Altimetrik"
          onPress={createOpenLink({
            latitude: 12.852215702264141,
            longitude: 77.66376704233866,
            query: 'Altimetrik India Private Limited',
            zoom: 15,
            provider: 'google',
            queryPlaceId: 'VM27+GF Bengaluru, Karnataka',
          })}
        /> */}
        <TouchableHighlight onPress={() => this.openA()} style={styles.button}>
          <Text>A</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.openB()} style={styles.button}>
          <Text>B</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
