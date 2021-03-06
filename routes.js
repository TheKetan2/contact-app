import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
// import { StackNavigator, TabNavigator } from "react-navigation";
import { MaterialIcons } from "@expo/vector-icons";

import Favorites from "./screens/Favorites";
import Contacts from "./screens/Contacts";
import Profile from "./screens/Profile";
import User from "./screens/User";

import colors from "./utils/colors";

const getDrawerItemIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={22} style={{ color: tintColor }} />
);
const getTabBarIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);

const ContactScreens = createStackNavigator(
  {
    Contacts: {
      screen: Contacts
    },
    Profile: {
      screen: Profile
    }
  },
  {
    initialRouteName: "Contacts",
    navigationOptions: {
      tabBarIcon: getTabBarIcon("list"),
      drawerIcon: getDrawerItemIcon("list")
    }
  }
);

const FavoriteScreens = createStackNavigator(
  {
    Favorites: {
      screen: Favorites
    },
    Profile: {
      screen: Profile
    }
  },
  {
    initialRouteName: "Favorites",
    navigationOptions: {
      tabBarIcon: getTabBarIcon("star"),
      drawerIcon: getDrawerItemIcon("star")
    }
  }
);

const UserScreens = createStackNavigator(
  {
    User: { screen: User }
  },
  {
    initialRouteName: "User",
    navigationOptions: {
      tabBarIcon: getTabBarIcon("person"),
      drawerIcon: getDrawerItemIcon("person")
    }
  }
);

const DrawerToggle = createDrawerNavigator(
  {
    Contacts: ContactScreens,

    User: UserScreens,
    Favorites: FavoriteScreens
  },
  {
    initialRouteName: "Contacts",
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        backgroundColor: colors.greyLight
      },
      showLabel: false,
      showIcon: true,
      activeTintColor: colors.blue,
      inactiveTintColor: colors.greyDark,
      renderIndicator: () => null
    }
  }
);

export default createAppContainer(DrawerToggle);

// const ContactsScreens = StackNavigator(
//   {
//     Contacts: {
//       screen: Contacts
//     },
//     Profile: {
//       screen: Profile
//     }
//   },
//   {
//     initialRouteName: "Contacts",
//     navigationOptions: {
//       tabBarIcon: getTabBarIcon("list")
//     }
//   }
// );

// const FavoritesScreens = StackNavigator(
//   {
//     Favorites: {
//       screen: Favorites
//     },
//     Profile: {
//       screen: Profile
//     }
//   },
//   {
//     initialRouteName: "Favorites",
//     navigationOptions: {
//       tabBarIcon: getTabBarIcon("star")
//     }
//   }
// );

// const UserScreens = StackNavigator(
//   {
//     User: {
//       screen: User
//     }
//   },
//   {
//     initialRouteName: "User",
//     navigationOptions: {
//       tabBarIcon: getTabBarIcon("person")
//     }
//   }
// );

// export default TabNavigator(
//   {
//     Contacts: {
//       screen: ContactsScreens
//     },
//     Favorites: {
//       screen: FavoritesScreens
//     },
//     User: {
//       screen: UserScreens
//     }
//   },
//   {
//     initialRouteName: "Contacts",
//     tabBarPosition: "bottom",
//     tabBarOptions: {
//       style: {
//         backgroundColor: colors.greyLight
//       },
//       showLabel: false,
//       showIcon: true,
//       activeTintColor: colors.blue,
//       inactiveTintColor: colors.greyDark,
//       renderIndicator: () => null
//     }
//   }
// );
