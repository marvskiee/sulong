import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { externalStyle } from "../../styles/externalStyle";
import { createUser } from "../../services/user.services";
import {
  formErrorToast,
  passwordErrorToast,
  registerSuccessToast,
  sessionErrorToast,
  usernameErrorToast,
} from "../Toast";
import { isLoading } from "expo-font";
const NavigateToDetails = ({ navigation }, name) => {
  navigation.navigate(name);
};
const Register = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [contact, setContact] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeat, setRepeat] = useState(null);

  const submitHandler = async () => {
    setIsLoading(true);

    const newData = {
      username,
      password,
      email,
      first_name: firstName,
      last_name: lastName,
      phone_number: contact,
    };
    if (password != repeat) {
      passwordErrorToast();
      setIsLoading(false);

      return;
    }
    if (
      firstName &&
      lastName &&
      contact &&
      username &&
      password &&
      email &&
      repeat
    ) {
      const res = await createUser(newData);
      if (res.success) {
        registerSuccessToast();
        NavigateToDetails(props, "login");
      } else {
        usernameErrorToast();
      }
      console.log(newData);
    } else {
      formErrorToast();
    }
    console.log(newData);

    setIsLoading(false);
  };
  const field = [
    {
      label: "First Name",
      placeholder: "John",
      handler: (e) => setFirstName(e),
      value: firstName,
    },
    {
      label: "Last Name",
      placeholder: "Doe",
      handler: (e) => setLastName(e),
      value: lastName,
    },
    {
      label: "Contact Number",
      placeholder: "9XXXXXXXXX",
      handler: (e) => setContact(e),
      value: contact,
    },
    {
      label: "Username",
      placeholder: "johndoe",
      handler: (e) => setUsername(e),
      value: username,
    },
    {
      label: "Email",
      placeholder: "johndoe@gmail.com",
      handler: (e) => setEmail(e),
      value: email,
    },
    {
      label: "Password",
      placeholder: "Password",
      handler: (e) => setPassword(e),
      value: password,
    },
    {
      label: "Repeat Password",
      placeholder: "Repeat Password",
      handler: (e) => setRepeat(e),
      value: repeat,
    },
  ];
  return (
    <View
      style={[
        {
          justifyContent: "center",
        },
      ]}
    >
      <View>
        <FlatList
          style={styles.containerWrapper}
          keyboardShouldPersistTaps={"handled"}
          nestedScrollEnabled={true}
          data={field}
          numColumns={1}
          renderItem={({ item }) => (
            <>
              <Text style={styles.semibold17label}>{item.label}</Text>
              <TextInput
                onChangeText={item.handler}
                value={item.value}
                placeholder={item.placeholder}
                style={styles.allfield}
              />
            </>
          )}
          ListHeaderComponent={
            <Text
              style={{
                textAlign: "center",
                fontFamily: "semibold",
                fontSize: 40,
                marginVertical: 20,
              }}
            >
              Sign Up
            </Text>
          }
          ListFooterComponent={
            <>
              {!isLoading ? (
                <TouchableOpacity activeOpacity={0.7} onPress={submitHandler}>
                  <View style={styles.submitButton}>
                    <Text style={[styles.submitText, { paddingVertical: 8 }]}>
                      Register
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View style={styles.submitButton}>
                  <Text style={[styles.submitText, { paddingVertical: 8 }]}>
                    Registering...
                  </Text>
                </View>
              )}
              <TouchableOpacity
                onPress={() => NavigateToDetails(props, "login")}
              >
                <Text
                  style={{
                    fontFamily: "semibold",
                    padding: 5,
                    textAlign: "center",
                  }}
                >
                  Already have an account? Tap to Login
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginVertical: 30,
                  justifyContent: "center",
                }}
              >
                <Text style={[]}>
                  By registering, you confirm that you accept our
                </Text>
                <TouchableOpacity
                  onPress={() => NavigateToDetails(props, "terms")}
                >
                  <Text style={{ fontFamily: "semibold" }}>terms of use</Text>
                </TouchableOpacity>
                <Text> and </Text>
                <TouchableOpacity
                  onPress={() => NavigateToDetails(props, "privacy")}
                >
                  <Text style={{ fontFamily: "semibold" }}>
                    privacy and policy
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          }
        />

        <StatusBar />
      </View>
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);

export default Register;
