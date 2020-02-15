import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import ContactThumbnail from "../components/ContactThumbnail";
import DetailsListItem from "../components/DetailsListItem";

import { fetchRandomContact } from "../utils/api";
import colors from "../utils/colors";

export default class Profile extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.contact.name.split(" ")[0],
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: colors.blue
      }
    };
  };

  async componentDidMount() {
    const contact = await fetchRandomContact();
    this.setState({ contact });
  }

  render() {
    const {
      navigation: {
        state: { params }
      }
    } = this.props;
    console.log(this.props);
    const { contact } = params;
    // const { contact } = this.props.navigation.state.params;
    const { avatar, name, email, phone, cell } = contact;

    return (
      <View style={styles.container}>
        <View style={styles.avatarSection}>
          <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        </View>
        <View style={styles.detailsSection}>
          <DetailsListItem icon="mail" title="Email" subtitle={email} />
          <DetailsListItem icon="phone" title="Phone" subtitle={phone} />
          <DetailsListItem icon="smartphone" title="Personal" subtitle={cell} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  avatarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "white"
  }
});
