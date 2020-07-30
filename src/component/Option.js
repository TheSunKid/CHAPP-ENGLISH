
import React, { useState } from "react";

import {

    StyleSheet,

    View,
    Text,

    Switch,
    Button,
    TextInput
} from 'react-native';

const Option = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View>
          

             
                <Switch
                    trackColor={{ false: "#f01800", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#ffffff" : "#f0dc00"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0, margin:0
    },
    
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

})
export default Option;