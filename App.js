import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
          Here are some boxes of different colors
        </Text>
      </View>
      <View style={[styles.container, { backgroundColor: '#2aa198' }]}>
        <Text style={styles.text}>Cyan: #2aa198</Text>
      </View>
      <View style={[styles.container, { backgroundColor: '#268bd2' }]}>
        <Text style={styles.text}>Blue: #268bd2</Text>
      </View>
      <View style={[styles.container, { backgroundColor: '#d33682' }]}>
        <Text style={styles.text}>Magenta: #d33682</Text>
      </View>
      <View style={[styles.container, { backgroundColor: '#cb4b16' }]}>
        <Text style={styles.text}>Orange: #cb4b16</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
