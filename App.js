import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DetailsScreen from "./src/screens/DetailsScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Details: DetailsScreen,
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",

    defaultNavigationOptions: {
      title: "The Spot!",
    },
  }
);

export default createAppContainer(navigator);
