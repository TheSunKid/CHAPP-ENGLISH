import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';

import ComboPre from '../../Course/ComboVoucher/ComboPre';
 
export default function Pre_School_Couse () {
  const [items, setItems] = React.useState([
    { name: 'Book1', code: '#1abc9c' },
    { name: 'Book2', code: '#2ecc71' },
    { name: 'Book3', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' }
  
  ]);
 
  return (
    <ScrollView style={styles.gridView} >
     <View style={styles.voucher} >
     <ComboPre/>
     </View>
     <View style={styles.gridView}>
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
        </View>
      )}
      //Setting the number of column
      numColumns={3}
      keyExtractor={(item, index) => index.toString()}
    /></View>
  </ScrollView>


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
    height: 150,
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