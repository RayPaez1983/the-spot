import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ImagesScreen from './src/screens/ImagesScreen';
import LatinRestaurants from './src/screens/LatinRestaurants';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Details: DetailsScreen,
    Image: ImagesScreen,
    LatinPlaces: LatinRestaurants,
    ColorDemo: ColorScreen,
    SquareComponent: SquareScreen,
    Text: TextScreen,
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Search',

    defaultNavigationOptions: {
      title: 'City App',
    },
  }
);

export default createAppContainer(navigator);
