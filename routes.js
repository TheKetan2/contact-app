import { StackNavigator } from "react-navigation";

import Contacts from "./screens/Contacts";
import Profile from "./screens/Profile";
import Favorites from "./screens/Favorites";

export default StackNavigator(
  {
    Contacts: {
      screen: Contacts
    },
    Profile: {
      screen: Profile
    },
    Favorites: {
      screen: Favorites
    }
  },
  {
    initialRouteName: "Favorites"
  }
);
