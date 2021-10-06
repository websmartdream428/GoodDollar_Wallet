import React from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type ButtonProps = {
  onPress: any;
  title: String;
};

const styles = StyleSheet.create({
  EventSide: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "16px",
  },
  CancelButtonContainer: {
    textAlign: "center",
    width: "25%",
    padding: "10px",
  },
  CancelText: { color: "#A3A3A3", fontSize: 14 },
  SaveButtonContainer: {
    width: "65%",
    textAlign: "center",
    backgroundColor: "rgb(0, 175, 255)",
    padding: "15px",
    borderRadius: 100,
  },
  SaveText: { color: "#fff", fontSize: 16 },
});

const CancelButton = ({ onPress, title }: ButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.CancelButtonContainer}>
    <Text style={styles.CancelText}>{title}</Text>
  </TouchableOpacity>
);

const SaveButton = ({ onPress, title }: ButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.SaveButtonContainer}>
    <Text style={styles.SaveText}>{title}</Text>
  </TouchableOpacity>
);

const PageEvent = () => {
  return (
    <View style={styles.EventSide}>
      <CancelButton
        onPress={() => Alert.alert("Click the Cancel Button")}
        title="Cancel"
      />
      <SaveButton
        onPress={() => Alert.alert("Click the Save Button")}
        title="SAVE"
      />
    </View>
  );
};

export default PageEvent;
