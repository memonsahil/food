import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={{ fontSize: 14 }}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 12,
    marginVertical: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default ResultsDetail;
