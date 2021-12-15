import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#181926",
		justifyContent: "center",
	},

	bg: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },

	image: {
		// backgroundColor: "#c1c",
		marginHorizontal: 180,
		height: 70,
	},

	ellipse: {
		position: "absolute",
		alignSelf: "center",
		zIndex: 1,
	},

	passcode: {
		zIndex: 2,
		alignSelf: "center",
		marginVertical: 20,
	},

	circle: {
		borderWidth: 1,
		borderRadius: 100,
		borderColor: "#009899",
		// backgroundColor: "#000",
		width: 15,
		height: 15,
		marginHorizontal: 5,
	},

	circleFull: {
		borderWidth: 1,
		borderRadius: 100,
		backgroundColor: "#fff",
		width: 15,
		height: 15,
		marginHorizontal: 5,
	},

	text: {
		marginVertical: 30,
		alignSelf: "center",
		fontSize: 25,
		color: "#fff",
		// fontWeight: "700",
		fontFamily: "Montserrat-Bold",
	},

	errtxt: {
		marginTop: 20,
		alignSelf: "center",
		color: "red",
		fontFamily: "Montserrat-Regular",
		fontSize: 15,
	},

	circles: {
		// width: 100,
		height: 15,
		alignSelf: "center",
		marginHorizontal: 100,
		// backgroundColor: "#fff",
		flexDirection: "row",
	},

	pincode: {
		marginTop: 30,
		marginHorizontal: 50,
		alignSelf: "center",
	},

	row: {
		flexDirection: "row",
		justifyContent: "center",
	},

	borderedNumber: {
		width: 65,
		height: 65,
		borderWidth: 1,
		borderRadius: 100,
		borderColor: "#009899",
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 15,
		marginBottom: 15,
	},

	number: {
		color: "#414141",
		fontSize: 30,
		fontWeight: "600",
		fontFamily: "Montserrat-Regular",
		// alignSelf: "center",
	},
});
