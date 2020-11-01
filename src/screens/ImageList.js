//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import colors from '../utils/colors';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native-gesture-handler';
import Input from '../components/Input';
// create a component
class ImageList extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      name: 'kkk',
      mobileNumber: '',
      email: '',
      adhaar: '',
      userId: '5d13b89918dce705ab724f76',
      defaultSearch: 'harrypotter',
    };
  }

  componentDidMount() {
    this.props.getImageList(this.state.defaultSearch);
  }
  getListByTitle = (val) => {
    let searchText = val.length > 2 ? val : this.state.defaultSearch;
    if (val.length > 2) {
      this.props.getImageList(searchText);
    } else {
      this.props.getImageList(this.state.defaultSearch);
    }
  };
  renderListView = (item) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen', {data: item});
          }}>
          {item?.pagemap?.cse_thumbnail &&
          item?.pagemap?.cse_thumbnail[0]?.src ? (
            <Image
              source={{uri: item?.pagemap?.cse_thumbnail[0]?.src}}
              style={styles.ImageStyle}
            />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Search by title"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          // placeholderTextColor={colors.placeholderTextColor}
          maxLength={30}
          onChangeText={(val) => this.getListByTitle(val)}
        />

        {this.props.getImageLoading ? (
          <ActivityIndicator />
        ) : (
          <View>
            {this.props?.imageData?.items ? (
              <FlatList
                contentContainerStyle={{padding: 5}}
                data={this.props?.imageData?.items}
                renderItem={({item}) => this.renderListView(item)}
              />
            ) : (
              <View>
                <Text style={styles.noData}>No Data</Text>
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ffffff',
  },
  borderContainer: {
    backgroundColor: colors.containerBackgroundColor,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 3,
  },
  input: {
    fontSize: 14,
    padding: 10,
    color: colors.defaultTextColor,
  },
  box2: {
    backgroundColor: 'green',
    width: 200,
    height: 50,
    alignSelf: 'center',
  },
  noData: {
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#4A148C',
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
});

//make this component available to the app
export default ImageList;

ImageList.propTpes = {
  updateUser: PropTypes.func,
  getUser: PropTypes.func,
  userData: PropTypes.any,
  updateUserLoading: PropTypes.bool,
  updateUserError: PropTypes.string,
  updateUserStatus: PropTypes.string,
  clearData: PropTypes.func,
  getUserLoading: PropTypes.bool,
  getUserError: PropTypes.string,
  getUserStatus: PropTypes.string,

  getImageList: PropTypes.func,
  imageData: PropTypes.any,
  getImageLoading: PropTypes.bool,
  getImageError: PropTypes.string,
  getImageStatus: PropTypes.string,
  getImageType: PropTypes.string,
};
