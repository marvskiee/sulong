import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { externalStyle } from "../../styles/externalStyle";
import colors from "../../config/colors";
const NavigateToDetails = ({ navigation }, name) => {
  navigation.navigate(name);
};
const RequestPassword = (props) => {
  return (
    <View
      style={[
        styles.containerWrapper,
        {
          justifyContent: "center",
          flex: 1,
        },
        // styles.container,
      ]}
    >
      <View>
        <Text
          style={{
            marginvertical: 20,
            textAlign: "center",
            fontFamily: "semibold",
            fontSize: 30,
          }}
        >
          Password Recovery
        </Text>
        <Text style={styles.semibold17label}>Username</Text>
        <TextInput placeholder="johndoe" style={styles.allfield} />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => NavigateToDetails(props, "reset_password")}
        >
          <View style={[styles.submitButton, { marginBottom: 2 }]}>
            <Text style={[styles.submitText, { paddingVertical: 8 }]}>
              Send Code
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => NavigateToDetails(props, "login")}>
          <Text
            style={{
              fontFamily: "semibold",
              marginBottom: 20,
              padding: 10,
              fontSize: 17,
              textAlign: "center",
            }}
          >
            Back to Sign In
          </Text>
        </TouchableOpacity>
        <StatusBar />
      </View>
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);

export default RequestPassword;
