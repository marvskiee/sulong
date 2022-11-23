import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { externalStyle } from "../../styles/externalStyle";
import { IncidentReport, RequestInquiry, Reservation } from "../Svg";
import colors from "../../config/colors";

const Dashboard = () => {
  const items = [
    {
      label: "Request & Inquiry",
      icon: <RequestInquiry />,
      count: "5",
    },
    {
      label: "Reservation",
      icon: <Reservation />,
      count: "2",
    },
    {
      label: "Incident Report",
      icon: <IncidentReport />,
      count: "1",
    },
  ];
  return (
    <View style={[styles.container, styles.containerWrapper]}>
      <FlatList
        keyboardShouldPersistTaps={"handled"}
        nestedScrollEnabled={true}
        data={items}
        numColumns={1}
        renderItem={({ item }) => (
          <View
            style={[styles.dashboardCard, { backgroundColor: colors.darkgray }]}
          >
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  paddingTop: 5,
                  marginRight: 5,
                  fontFamily: "semibold",
                  fontSize: 30,
                  // paddingTop: 10,
                }}
              >
                {item.count}
              </Text>
              {item.icon}
            </View>
            <Text style={styles.dashboardText}>{item.label}</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create(externalStyle);

export default Dashboard;
