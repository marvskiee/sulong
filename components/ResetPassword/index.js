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
const ResetPassword = (props) => {
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
          Reset Password
        </Text>
        <Text style={styles.semibold17label}>Code</Text>
        <TextInput placeholder="XX-XX-XX" style={styles.allfield} />
        <Text style={styles.semibold17label}>New Password</Text>
        <TextInput placeholder="Password" style={styles.allfield} />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => NavigateToDetails(props, "login")}
        >
          <View style={[styles.submitButton, { marginBottom: 2 }]}>
            <Text style={[styles.submitText, { paddingVertical: 8 }]}>
              Submit
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

export default ResetPassword;
