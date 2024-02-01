import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import React, {useEffect, useState} from 'react';
import {DATA} from './Data.js'
import Row from './components/Row.js';
import Search from './components/Search.js';

export default function App() {
  const [items, setItems] = useState([]);

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  };

  useEffect(() => {
    setItems(DATA); 
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        renderItem = {({item}) => (
          <Row person={item}/>
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 250,
  }
});
