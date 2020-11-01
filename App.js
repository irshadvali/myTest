import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/Home';
import ImageListContainer from './src/containers/ImageListContainer';
import AllBillsConatiner from './src/containers/AllBillsConatiner';
import configureStore from './configStore';
import {Provider} from 'react-redux';
const Stack = createStackNavigator();
export default class App extends Component {
  constructor(props) {
    super(props);
    // Text.defaultProps.allowFontScaling = false;
    // TextInput.defaultProps.allowFontScaling = false;
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({isLoading: false})),
    };
  }

  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="AllBillsList"
              component={AllBillsConatiner}
              options={{title: 'AllBillsList'}}
            />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}