import * as React from "react";
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";



export default function CabinetScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                Hello
            </Text>
        </SafeAreaView>
    )
}