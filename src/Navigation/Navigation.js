import * as React from "react";
import {
	NavigationContainer,
} from "@react-navigation/native";
import PassCode from "../Screens/PassCode/view";
import ChoosePage from "../Screens/ChooseScreen/view";
import CabinetScreen from "../Screens/CabinetScreen/view";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="PassCode" component={PassCode} />
				<Stack.Screen name="ChoosePage" component={ChoosePage} />
				<Stack.Screen name="CabinetScreen" component={CabinetScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
