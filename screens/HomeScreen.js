import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';

import RootStore from '../stores/RootStore';

function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* 
        Making a text 
        "count" = var
        
        Decrement/Increment button
        decrement = count goes down
        increment = count goes up

        Connect it to MobX
        count persists

        Create a store

      */}

      <Text style={styles.text}>Bootleg counting! :3</Text>
      <TouchableOpacity style={styles.leftButton} onPress={()=> RootStore.CounterStore.incrementCountValue()}><Text style={styles.text}>+</Text></TouchableOpacity>
      <TouchableOpacity style={styles.rightButton} onPress={()=> RootStore.CounterStore.decrementCountValue()}><Text style={styles.text}>-</Text></TouchableOpacity>
      <Text style={styles.text}>{RootStore.CounterStore.myCountValue}</Text>


    </View>
  );
}

export default observer(HomeScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  leftButton: {
    padding: 20,
    backgroundColor: 'green',
  },
  rightButton: {
    padding: 20,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 50
  }
});
