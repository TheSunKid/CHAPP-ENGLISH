import { Platform } from "react-native";

export default {
    PLATFORM: Platform.OS === "ios" ? "iOS" : "android",
};

