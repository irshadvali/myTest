import React, {useState, useRef, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  TextInput,
} from 'react-native';
export default function UseRefExample(props) {
  const [result, setResult] = useState(0);
  const [click, setClicked]= useState(0);
  const refNum1 = useRef();
  const refNum2 = useRef();
  let refCount=useRef(1);
  //   const sum = () => {
  //     // refCount.current++;
  //     // console.log(`Clicked ${refCount.current} times`);
  //     console.log(refNum1.current.getNativeRef());
  //     // setResult(+refNum1.current + +refNum2.current);
  //     //refNum1.current.clear();
  //   };
  const sum = useCallback(() => {
    setClicked(refCount.current++);
    refNum2.current.setNativeProps({text: '8'});
    refNum1.current.clear();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{'UseRefExample'}</Text>
        <Text style={{marginVertical: 20, fontSize: 20, fontFamily: 'bold'}}>
          {'Result-'} {result}
        </Text>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            borderRadius: 5,
            borderWidth: 1,
            borderTopColor: 'red',
            borderBottomColor: 'blue',
            borderLeftColor: 'green',
          }}>
          <TextInput title={'Number1'} name={'num1'} ref={refNum1} />
        </View>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            borderRadius: 5,
            borderWidth: 1,
            borderTopColor: 'red',
            borderBottomColor: 'blue',
            borderLeftColor: 'green',
            marginVertical: 20,
          }}>
          <TextInput title={'Number2'} ref={refNum2} name={'num2'} />
        </View>
        <Button
          title={`You clicked ${click}`}
          onPress={() => {
            sum();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC55',
  },
  tabHeading: {
    padding: 20,
    flexDirection: 'row',
  },
  title: {
    textTransform: 'capitalize',
  },
});
