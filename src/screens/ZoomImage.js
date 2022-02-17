import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
export default class ZoomImage extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <ImageZoom
          cropWidth={Dimensions.get('window').width}
          cropHeight={Dimensions.get('window').height}
          imageWidth={200}
          imageHeight={200}>
          <Image
            style={{width: 200, height: 200}}
            source={{
              uri:
                'https://images.unsplash.com/photo-1608231975456-2f2d9fb1b49b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NDMwNTQ4OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100',
            }}
          />
        </ImageZoom>
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
