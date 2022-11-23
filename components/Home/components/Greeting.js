import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { externalStyle } from "../../../styles/externalStyle";
import { connect } from "react-redux";
import { getUser } from "../../../services/user.services";
import { sessionErrorToast } from "../../Toast";
import { setUser } from "../../../redux/";

const NavigateToDetails = ({ navigation }) => {
  navigation.navigate("profile");
};
const Greeting = (props) => {
  const [greet, setGreet] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    const now = new Date();
    const current = now.getHours();
    if (current > 4 && current < 12) {
      setGreet("morning");
    } else if (current >= 12 && current < 18) {
      setGreet("afternoon");
    } else if (current >= 17 && current < 22) {
      setGreet("evening");
    } else {
      setGreet("night");
    }
    const load = async () => {
      const res = await getUser(props.auth?.accessToken);
      if (res.success) {
        // setTimeout(() => {
        setData([res.data]);
        props.setUser(res.data);
        // }, 1000);
      } else {
        sessionErrorToast();
      }
    };
    if (!data) {
      load();
    }
    console.log("try");
  });

  return (
    <View style={styles.greetingWrapper}>
      <View style={styles.greeting}>
        <View>
          <Text style={styles.semibold17}>Good {greet},</Text>
          <Text style={styles.semibold22}>{data && data[0].username}</Text>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => NavigateToDetails(props)}
          >
            <Image
              source={require("../../../assets/images/denji.png")}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(externalStyle);

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
  };
};
export default connect(mapStateToProps, { setUser })(Greeting);
