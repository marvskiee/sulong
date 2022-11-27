import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { getUser, updateUser } from "../../services/user.services";
import { externalStyle } from "../../styles/externalStyle";
import { sessionErrorToast, updateSuccessToast } from "../Toast";
import { connect } from "react-redux";

const Profile = (props) => {
  const [isEditable, setIsEditable] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const firstnameRef = useRef();
  const [firstName1, setFirstName1] = useState();
  const [lastName1, setLastName1] = useState();
  const [gender1, setGender1] = useState();
  const [phoneNumber1, setPhoneNumber1] = useState();
  const [email1, setEmail1] = useState();
  const [address1, setAddress1] = useState();
  const [country1, setCountry1] = useState();
  const [city1, setCity1] = useState();
  const [zipCode1, setZipCode1] = useState();
  const [region1, setRegion1] = useState();

  useEffect(() => {
    const load = async () => {
      reload();
    };
    load();
  }, []);
  const reload = async () => {
    const res = await getUser(props.auth?.accessToken);
    if (res.success) {
      setTimeout(() => {
        setData([res.data]);
      }, 1000);
    } else {
      sessionErrorToast();
    }
  };
  const saveHandler = async () => {
    // setIsLoading2(true);
    const {
      first_name,
      last_name,
      gender,
      phone_number,
      email,
      address,
      country,
      city,
      region,
      zip_code,
    } = data[0];
    const newData = {
      first_name: firstName1 != null ? firstName1 : first_name,
      last_name: lastName1 != null ? lastName1 : last_name,
      gender: gender1 != null ? gender1 : gender,
      phone_number: phoneNumber1 != null ? phoneNumber1 : phone_number,
      email: email1 != null ? email1 : email,
      address: address1 != null ? address1 : address,
      country: country1 != null ? country1 : country,
      city: city1 != null ? city1 : city,
      region: region1 != null ? region1 : region,
      zip_code: zipCode1 != null ? zipCode1 : zip_code,
    };
    const res = await updateUser(data[0]?.id, newData, props?.auth.accessToken);
    if (res.success) {
      updateSuccessToast();
      reload();
      setIsEditable(false);
    } else {
      sessionErrorToast();
    }
    setIsLoading2(false);
    console.log(newData);
  };
  const cancelHandler = () => {
    reload();
    setIsEditable(false);
    setFirstName1(null);
    setLastName1(null);
    setGender1(null);
    setPhoneNumber1(null);
    setEmail1(null);
    setAddress1(null);
    setCountry1(null);
    setCity1(null);
    setZipCode1(null);
    setRegion1(null);
  };
  return (
    <View style={[styles.container, styles.containerWrapper]}>
      {isLoading && (
        <View style={[styles.loadingWrapper]}>
          <Text style={styles.loading}>Fetching Please Wait...</Text>
        </View>
      )}
      {data && (
        <ScrollView keyboardShouldPersistTaps={"handled"}>
          <>
            <View
              style={{
                alignItems: "center",
                width: "100%",
                flex: 1,
              }}
            >
              <Image
                source={require("../../assets/images/denji.jpg")}
                style={styles.profileImage}
              />
              <Text style={styles.semibold17}>{data[0].username}</Text>
            </View>
            <View style={styles.updateProfileWrapper}>
              {isLoading2 ? (
                <TouchableOpacity onPress={() => setIsEditable(false)}>
                  <View style={styles.updateProfileButton}>
                    <Text style={styles.updateProfileText}>Cancel</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <>
                  {!isEditable ? (
                    <TouchableOpacity onPress={() => setIsEditable(true)}>
                      <View style={styles.updateProfileButton}>
                        <Text style={styles.updateProfileText}>
                          Update Profile
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <>
                      <TouchableOpacity onPress={saveHandler}>
                        <View style={styles.updateProfileButton}>
                          <Text style={styles.updateProfileText}>Save</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={cancelHandler}>
                        <View style={styles.updateProfileButton}>
                          <Text style={styles.updateProfileText}>Cancel</Text>
                        </View>
                      </TouchableOpacity>
                    </>
                  )}
                </>
              )}
            </View>

            {data.map(
              (
                {
                  first_name,
                  last_name,
                  gender,
                  phone_number,
                  email,
                  address,
                  country,
                  city,
                  region,
                  zip_code,
                },
                index
              ) => (
                <View key={index}>
                  <Text style={styles.semibold17label}>First Name</Text>
                  <TextInput
                    editable={isEditable}
                    defaultValue={firstName1 != null ? firstName1 : first_name}
                    onChangeText={(e) => setFirstName1(e)}
                    style={styles.allfield}
                  />
                  <Text style={styles.semibold17label}>Last Name</Text>
                  <TextInput
                    editable={isEditable}
                    value={lastName1 != null ? lastName1 : last_name}
                    onChangeText={(e) => setLastName1(e)}
                    style={styles.allfield}
                  />
                  <Text style={styles.semibold17label}>Gender</Text>
                  <TextInput
                    editable={isEditable}
                    value={gender1 != null ? gender1 : gender}
                    onChangeText={(e) => setGender1(e)}
                    style={styles.allfield}
                  />
                  <Text style={styles.semibold17label}>Phone Number</Text>
                  <TextInput
                    keyboardType="numeric"
                    editable={isEditable}
                    value={
                      phoneNumber1 != null
                        ? phoneNumber1
                        : phone_number?.toString() || ""
                    }
                    onChangeText={(e) => setPhoneNumber1(e)}
                    style={styles.allfield}
                  />
                  <Text style={styles.semibold17label}>Email</Text>
                  <TextInput
                    editable={isEditable}
                    value={email1 != null ? email1 : email}
                    onChangeText={(e) => setEmail1(e)}
                    style={styles.allfield}
                  />
                  <Text style={styles.semibold17label}>Address</Text>
                  <TextInput
                    editable={isEditable}
                    value={address1 != null ? address1 : address}
                    onChangeText={(e) => setAddress1(e)}
                    style={styles.allfield}
                  />
                  <Text style={styles.semibold17label}>Country</Text>
                  <TextInput
                    editable={isEditable}
                    value={country1 != null ? country1 : country}
                    onChangeText={(e) => setCountry1(e)}
                    style={styles.allfield}
                  />
                  <Text style={styles.semibold17label}>City</Text>
                  <TextInput
                    editable={isEditable}
                    value={city1 != null ? city1 : city}
                    onChangeText={(e) => setCity1(e)}
                    style={styles.allfield}
                  />
                  <Text style={styles.semibold17label}>Region</Text>
                  <TextInput
                    editable={isEditable}
                    value={region1 != null ? region1 : region}
                    onChangeText={(e) => setRegion1(e)}
                    style={styles.allfield}
                  />
                  <Text style={styles.semibold17label}>Zip Code</Text>
                  <TextInput
                    editable={isEditable}
                    value={
                      zipCode1 != null ? zipCode1 : zip_code?.toString() || ""
                    }
                    onChangeText={(e) => setZipCode1(e)}
                    style={styles.allfield}
                  />
                </View>
              )
            )}
          </>
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);
const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
  };
};
export default connect(mapStateToProps, {})(Profile);
