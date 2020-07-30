import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import ComboKinder from '../../ComboVoucher/ComboKinder';

import { ScrollView } from 'react-native-gesture-handler';

export default function List_Product_Cambridge() {
  const [items, setItems] = React.useState([
    { name: 'Book1', code: '#1abc9c' },
    { name: 'Book2', code: '#2ecc71' },
    { name: 'Book3', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'AMETHYST', code: '#9b59b6' }

   
   
   
    

  ]);

  return (
<ScrollView>
    <FlatGrid
    itemDimension={70}
    data={items}
    style={styles.gridView}
    staticDimension={350}
    // fixed
    spacing={10}
    horizontal={false}
    renderItem={({ item }) => (
      <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCode}>{item.code}</Text>
      </View>
    )}
  /></ScrollView>

  );
}
 
const styles = StyleSheet.create({
  gridView: {
    marginTop: 0,
    flex: 1,
  },
  voucher: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 90,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});