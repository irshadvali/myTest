import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChartScreenContainer from './src/containers/ChartScreenContainer';
import AllBillsConatiner from './src/containers/AllBillsConatiner';
import configureStore from './configStore';
import {Provider} from 'react-redux';
import MyMap from './src/screens/MyMap';
import OpenMapAA from './src/screens/OpenMapAA';
import MapOpenTwo from './src/screens/MapOpenTwo';
import ZoomImage from './src/screens/ZoomImage';
import Multisaelect from './src/screens/Multisaelect';
import MultiSelect from './src/screens/MultiSelect';
import SocialPage from './src/screens/SocialPage';
import HooksReducerTest from './src/screens/HooksReducerTest';
import HooksReducerNextPage from './src/screens/HooksReducerNextPage';
import MultiSelectReducer from './src/screens/reducerexample/MultiSelectReducer';
import MainScreen from './src/screens/usereducer/MainScreen';
import SecondPage from './src/screens/usereducer/SecondPage';
import UseRefExample from './src/screens/userefexample/UseRefExample';
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
              name="UseRefExample"
              component={UseRefExample}
              options={{title: 'UseRefExample'}}
            />
            <Stack.Screen name="ChartScreen" component={ChartScreenContainer} />
            <Stack.Screen
              name="HooksReducerNextPage"
              component={HooksReducerNextPage}
            />
            <Stack.Screen name="SecondPage" component={SecondPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
