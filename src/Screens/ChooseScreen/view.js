import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChooseImg from "../../Assets/images/authimg.png";
import Bg from '../../Assets/images/bg.png'
import { styles } from "./styles";

export default function ChoosePage({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Image source={Bg} style={styles.bg} />
			<View style={styles.img}>
				<Image source={ChooseImg} />
			</View>
			<View style={styles.press}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("CabinetScreen")}>
					<Text style={styles.text}>Войти в личный кабинет</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.text}>Заказать сотрудничество</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>

	);
}
