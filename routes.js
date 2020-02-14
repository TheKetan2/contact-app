import { StackNavigator } from "react-navigation";

import Contacts from "./screens/Contacts";
import Profile from "./screens/Profile";

export default StackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: { title: "Contact List" }
  },
  Profile: {
    screen: Profile,
    navigationOptions: { title: "Profile" }
  }
});
