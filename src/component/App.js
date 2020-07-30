
import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, StatusBar,SafeAreaView } from "react-native";
import Navigation from "../component/Screens/Navigation";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff'
  }
});

function App() {
  const [ready, setReady] = useState(true);
  // Get Persist Ready
  // useEffect(() => {
  //   persist(() => {
  //     setReady(true);
  //   });
  // },[]);

  const loading = (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
  const loaded = (
    <SafeAreaProvider>
        {/* {!isAndroid && ( */}
          {/* <StatusBar hidden></StatusBar> */}
        {/* )} */}
            <Navigation />
    </SafeAreaProvider>
  );
  return ready ? loaded : loading;
}

export default App;
