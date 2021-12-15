import  React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity,  Vibration } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Ellipse from "../../Assets/images/ellipse.png";
import { PassCodeIcon } from "../../Assets/icons/icons";
import Bg from "../../Assets/images/bg.png";

const defaultCircles = [
	<View style={styles.circle} />,
	<View style={styles.circle} />,
	<View style={styles.circle} />,
	<View style={styles.circle} />,
];

export default function PassCode({navigation}) { 				// PASSCODE FUNCTION //
	const [password, setPassword] = useState("");
	const [errMsg, setErrMsg] = useState("");
	const [indexPass, setIndexPass] = useState(0);
	const [passCircles, setPassCircles] = useState(defaultCircles);

	const onPressed = (value) => {
		setPassword(password + `${value}`);
		setIndexPass((prevState) => prevState + 1);
	};

	useEffect(() => {
		console.log("password: ", password);
		if (password.length === 4) {
			console.log(".password.length = 4");
			onCheck();
		}
	}, [password]);

	const onCheck = () => {
		console.log("onCheck");
		if (password === "0000") {
			console.log("onCheck if");
			console.log("success");
			setErrMsg("");
			onNext();
		} else {
			setErrMsg("Неправильный пароль");
			Vibration.vibrate([0, 200, 0, 200, 0]);
			console.log("Vibrated");
		}
		setPassword("");
		setIndexPass(0);
		setPassCircles([...defaultCircles]);
	};

	useEffect(() => {
		console.log("indexPass: ", indexPass);
		if (password.length < 4) {
			setPassCircles((prevState) => {
				let newState = prevState.map((circle, index) => {
					if (index + 1 <= indexPass) {
						return <View style={styles.circleFull} />;
					} else {
						return <View style={styles.circle} />;
					}
				});
				return newState;
			});
		}
	}, [indexPass]);

	const onNext = () => {
		navigation.navigate("ChoosePage");
	};

	return (
		<SafeAreaView style={styles.container}>
			<Image source={Bg} style={styles.bg}/>
			<View>
				<View style={styles.image}>
					<Image source={Ellipse} style={styles.ellipse} />
					<PassCodeIcon style={styles.passcode} />
				</View>
				<Text style={styles.text}>Введите пароль</Text>
				<View style={styles.circles}>
					{passCircles.map((circle, index) => circle)}
				</View>
				<Text style={styles.errtxt}>{errMsg || ""}</Text>
				<View style={styles.pincode}>
					<View style={styles.row}>
						<TouchableOpacity
							style={styles.borderedNumber}
							onPress={() => onPressed(1)}
						>
							<Text style={styles.number}>1</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.borderedNumber}
							onPress={() => onPressed(2)}
						>
							<Text style={styles.number}>2</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.borderedNumber}
							onPress={() => onPressed(3)}
						>
							<Text style={styles.number}>3</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity
							style={styles.borderedNumber}
							onPress={() => onPressed(4)}
						>
							<Text style={styles.number}>4</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.borderedNumber}
							onPress={() => onPressed(5)}
						>
							<Text style={styles.number}>5</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.borderedNumber}
							onPress={() => onPressed(6)}
						>
							<Text style={styles.number}>6</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity
							style={styles.borderedNumber}
							onPress={() => onPressed(7)}
						>
							<Text style={styles.number}>7</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.borderedNumber}
							onPress={() => onPressed(8)}
						>
							<Text style={styles.number}>8</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.borderedNumber}
							onPress={() => onPressed(9)}
						>
							<Text style={styles.number}>9</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity
							style={styles.borderedNumber}
							onPress={() => onPressed(0)}
						>
							<Text style={styles.number}>0</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
