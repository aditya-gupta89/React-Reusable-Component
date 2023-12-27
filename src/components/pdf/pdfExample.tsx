import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    display: "flex",
    padding: 24,
    gap: "40px",
  },
  headers: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    flexDirection: "column",
    gap: 1,
  },
  h4: {
    fontSize: "12px",
  },
  h2: {
    fontSize: "14px",
    color: "green",
  },
  body: {
    fontSize: "10px",
  },
  body1: {
    fontSize: "11px",
  },
  image: {
    height: 30,
    width: 30,
  },
  address: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  date: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  billing: {
    gap: "12px",
    display: "flex",
    flexDirection: "column",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const lists = [
  {
    id: 1,
    description: "Freelancer Subscription (12/05/2019 - 11/06/2019)",
    qty: 1,
    price: 55.5,
    total: 55.5,
  },
];

const PdfFile = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headers}>
          <View style={styles.logo}>
            <Image style={styles.image} src="/logo192.png" />
            <Text style={styles.h4}>WWW.devias.io</Text>
          </View>
          <View>
            <Text style={styles.h2}>PAID</Text>
            <Text style={styles.h4}>INV-0019</Text>
          </View>
        </View>
        <View style={styles.address}>
          <View>
            <Text style={styles.body}>Street King William, 123</Text>
            <Text style={styles.body}>Level 2, C, 442456</Text>
            <Text style={styles.body}>San Francisco CA, USA</Text>
          </View>
          <View>
            <Text style={styles.body}>Company No. 4675933</Text>
            <Text style={styles.body}>EU VAT No. 949 67545 45</Text>
          </View>
          <View>
            <Text style={styles.body}>accounts@devias.io</Text>
            <Text style={styles.body}>(+40) 652 3456 23</Text>
          </View>
        </View>
        <View style={styles.date}>
          <View>
            <Text style={styles.body}>Due Date</Text>
            <Text style={styles.body}>31 Dec 2023</Text>
          </View>
          <View>
            <Text style={styles.body}>Date of issue</Text>
            <Text style={styles.body}>26 Dec 2023</Text>
          </View>
          <View>
            <Text style={styles.body}>Number</Text>
            <Text style={styles.body}>INV-0019</Text>
          </View>
        </View>
        <View style={styles.billing}>
          <Text style={styles.body}>Billed to</Text>
          <View>
            <Text style={styles.body1}>Tracey Herman</Text>
            <Text style={styles.body1}>Countdown Grey Lynn</Text>
            <Text style={styles.body1}>6934656584231</Text>
            <Text style={styles.body1}>6934656584231</Text>
            <Text style={styles.body1}>
              271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand
            </Text>
          </View>
        </View>
        {/* <View style={styles.table}>
          <View>
            <Text>#</Text>
            <Text>Description</Text>
            <Text>Qty</Text>
            <Text>Unit Price</Text>
            <Text>Total</Text>
          </View>

          {lists?.map((list) => (
            <View>
              <Text>1</Text>
              <Text>Freelancer Subscription (12/05/2019 - 11/06/2019) </Text>
              <Text>1</Text>
              <Text>$55.50</Text>
              <Text>$55.50</Text>
            </View>
          ))}
          <View>
            <View>
              <Text>Subtotal</Text>
              <Text>$55.00</Text>
            </View>
            <View>
              <Text>Taxes</Text>
              <Text>$5.50</Text>
            </View>
            <View>
              <Text>Total</Text>
              <Text>$55.50</Text>
            </View>
          </View>
        </View>
        <View style={styles.notes}>
          <Text>Notes</Text>
          <Text>
            Please make sure you have the right bank registration number as I
            had issues before and make sure you guys cover transfer expenses.
          </Text>
        </View> */}
      </Page>
    </Document>
  );
};

export default PdfFile;
