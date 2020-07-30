import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TableAcc({ navigation }) {
  const [School, SetSchool] = useState("Tiểu học ABC")
  const [Class, SetClass] = useState("A1")
  const [Start, SetStart] = useState("11/05/2020")
  const [Finish, SetFinish] = useState("11/05/2020")
  const [Reading, SetReading] = useState("10")
  const [Listen, Setlisten] = useState("10")
  const [Writing, SetWriting] = useState("10")
  const [Speak, SetSpeak] = useState("10"),

    tableData = [
      [<Text>School</Text>, School, <Text style={{marginLeft:10}}>Class</Text>, Class],
      [<Text>Start</Text>, Start, <Text style={{marginLeft:10}}>Finish</Text>, Finish],

    ],
    tableHead = ['Grade Point'],
    tableKQ = [
      ["Reading: " + Reading, "Listening: " + Listen],
      ["Writing: " + Writing, 'Speaking: ' + Speak],

    ]


  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 0 }}>

        <TableWrapper style={styles.wrapper}>

          <Rows data={tableData} flexArr={[1, 1, 1, 1]} style={styles.row} textStyle={styles.text} />
        </TableWrapper>
      </Table>


      <View style={styles.fixToText}>

        <Button title="Back" />
        <Button title="Back" />
        <Button title="Back" />
      </View>
      <View style={styles.fixToText}>

        <Button title="Back" />
        <Button title="Back" />
        <Button title="Back" />
      </View>
      <Table borderStyle={{ borderWidth: 0 }}>
        <Row data={tableHead} flexArr={1} style={styles.head} textStyle={styles.text} />
        <TableWrapper style={styles.wrapper}>

          <Rows data={tableKQ} flexArr={[1]} style={styles.row} textStyle={styles.text} />
        </TableWrapper>
      </Table>
    </View>
  )

}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 },
  head: { height: 40, backgroundColor: '#ffaf03' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1 },
  row: { height: 28 },
  text: { textAlign: 'center' },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});