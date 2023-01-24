import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./src/pages/Home";

const Stack = createNativeStackNavigator();

export function Router() {
    return ( 
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name = "Home" component = {Home} options={{
                        title: ' Full-Image ',
                        headerTransparent: true,
                        headerShadowVisible: false,
                    }}/> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}