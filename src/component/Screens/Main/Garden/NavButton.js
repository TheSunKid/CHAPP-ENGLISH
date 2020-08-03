import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const NavButton = props => {
    const goToScreen = () => {console.log(props)}
    return (
        <View>
            <TouchableOpacity onPress={() => goToScreen(props.screenName)}>
                <Image source={props.icon} />
            </TouchableOpacity>
        </View>
    );
};

export default NavButton;
