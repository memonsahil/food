import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null); //State to update and render the result data. Initial value for result must be null.

  const id = navigation.getParam("id"); //getParam function of the navigation object is used to access any additional argument sent through the object's navigate function.

  const getResult = async (id) => {
    //Helper function to get a particlar result based on its id.
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  console.log(result);

  useEffect(() => {
    //Getting pre-defined results that render initially based on id.
    getResult(id);
  }, []);

  if (!result) {
    //Do not show anything on the screen until we get result.
    return null;
  }

  console.log(id);

  return (
    <View>
      <Text style={styles.name}>{result.name}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
      <Text style={styles.infoTitle}>Contact:</Text>
      <Text style={styles.info}> {result.display_phone}</Text>
      <Text style={styles.infoTitle}>Address:</Text>
      <Text style={styles.info}>{result.location.address1}</Text>
      <Text style={styles.info}>{result.location.city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 15,
    marginTop: 10,
  },
  image: {
    height: 250,
    width: 350,
    borderRadius: 12,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  infoTitle: {
    marginLeft: 15,
    marginBottom: 5,
    fontWeight: "700",
    fontSize: 21,
  },
  info: {
    marginLeft: 15,
    marginBottom: 5,
    fontWeight: "500",
    fontSize: 18,
  },
});

export default ResultsShowScreen;
