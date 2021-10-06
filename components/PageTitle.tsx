import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Image } from "react-native-svg";

type TitleProps = {
  title: String;
};

const styles = StyleSheet.create({
  styledTitle: {
    fontSize: 16,
    fontWeight: "700",
    margin: "18px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#555555",
    marginLeft: "26px",
  },
  styledSvg: {
    marginLeft: 6,
    width: "20px",
    height: "20px",
  },
});

const PageTitle = ({ title }: TitleProps) => {
  return (
    <Text style={styles.styledTitle}>
      {title}
      <Svg style={styles.styledSvg}>
        <Image href={require("../assets/SVG/Help-Icon.svg")} />
      </Svg>
    </Text>
  );
};

export default PageTitle;
