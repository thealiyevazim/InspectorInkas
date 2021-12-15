import * as React from "react";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import SplashScreen from "react-native-splash-screen";
import Navigation from "./src/Navigation/Navigation";

export default App = () => {
	StatusBar.setBackgroundColor("#181926");
	StatusBar.setBarStyle("light-content");
	useEffect(() => {
		SplashScreen.hide();
	}, []);
	return <Navigation />;
};
