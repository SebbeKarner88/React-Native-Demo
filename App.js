import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from './src/Screens/HomeScreen'
import InputScreen from "./src/Screens/InputScreen";
import ListScreen from "./src/Screens/ListScreen";


const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Input: InputScreen,
        List: ListScreen

    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "App",
        },
    }
);

export default createAppContainer(navigator);
