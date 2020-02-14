import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import ContactThumbnail from "../components/ContactThumbnail";
import DetailsListItem from "../components/DetailsListItem";

import { fetchRandomContact } from "../utils/api";
import colors from "../utils/colors";

export default class Profile extends Component {
  state = {
    contact: {}
  };

  async componentDidMount() {
    const contact = await fetchRandomContact();
    this.setState({ contact });
  }

  render() {
    const { avatar, name, email, phone, cell } = this.state.contact;

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
