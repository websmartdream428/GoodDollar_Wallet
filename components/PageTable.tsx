import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
// import { Row, Rows, Table } from "react-native-table-component";
import { Col, Row, Grid } from "react-native-easy-grid";

const styles = StyleSheet.create({
  styledTable: {
    padding: 0,
    textAlign: "center",
  },
  HeadStyle: {
    color: "#555555",
    fontSize: 14,
  },
  TableText: {
    paddingLeft: 13,
    color: "#555555",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
  },
  TableRow: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: "10px",
  },
});

const PageTable = () => {
  const [checkedPhone, setCheckedPhone] = useState("masked");
  const [checkedEmail, setCheckedEmail] = useState("masked");

  return (
    <Grid style={styles.styledTable}>
      <Row style={styles.TableRow}>
        <Col size={2}></Col>
        <Col size={1}>
          <Text style={styles.HeadStyle}>Private</Text>
        </Col>
        <Col size={1}>
          <Text style={styles.HeadStyle}>Masked</Text>
        </Col>
        <Col size={1}>
          <Text style={styles.HeadStyle}>Public</Text>
        </Col>
      </Row>
      <Row style={styles.TableRow}>
        <Col size={2} style={{ justifyContent: "center" }}>
          <Text style={styles.TableText}>Phone Number</Text>
        </Col>
        <Col
          size={1}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <RadioButton
            value="private"
            status={checkedPhone === "private" ? "checked" : "unchecked"}
            onPress={() => setCheckedPhone("private")}
            color="rgb(0, 175, 255)"
          />
        </Col>
        <Col
          size={1}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <RadioButton
            value="masked"
            status={checkedPhone === "masked" ? "checked" : "unchecked"}
            onPress={() => setCheckedPhone("masked")}
            color="rgb(0, 175, 255)"
          />
        </Col>
        <Col
          size={1}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <RadioButton
            value="public"
            status={checkedPhone === "public" ? "checked" : "unchecked"}
            onPress={() => setCheckedPhone("public")}
            color="rgb(0, 175, 255)"
          />
        </Col>
      </Row>
      <Row style={styles.TableRow}>
        <Col size={2} style={{ justifyContent: "center" }}>
          <Text style={styles.TableText}>Email</Text>
        </Col>
        <Col
          size={1}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <RadioButton
            value="private"
            status={checkedEmail === "private" ? "checked" : "unchecked"}
            onPress={() => setCheckedEmail("private")}
            color="rgb(0, 175, 255)"
          />
        </Col>
        <Col
          size={1}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <RadioButton
            value="masked"
            status={checkedEmail === "masked" ? "checked" : "unchecked"}
            onPress={() => setCheckedEmail("masked")}
            color="rgb(0, 175, 255)"
          />
        </Col>
        <Col
          size={1}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <RadioButton
            value="public"
            status={checkedEmail === "public" ? "checked" : "unchecked"}
            onPress={() => setCheckedEmail("public")}
            color="rgb(0, 175, 255)"
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default PageTable;
