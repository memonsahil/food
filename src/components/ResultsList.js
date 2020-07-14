import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultsDetail from "../components/ResultsDetail";
import ResultsShowScreen from "../screens/ResultsShowScreen";
import { withNavigation } from "react-navigation"; //withNavigtion function helps access the navigation prop from the props object without passing it through a parent component.

const ResultsList = ({ title, results, navigation }) => {
  //Object destructuring from the props object requires curley braces.
  if (!results.length) {
    //Do not show anything on the screen until we get results. Helps hide the title for an empty results list.
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal //Same as horizontal = {true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => {
          result.id;
        }}
        renderItem={({ item }) => {
          return (
            //Rendering details for each result in the list.
            //navigation.navigate function also helps send information as an additional argument.
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ResultsShow", { id: item.id });
              }}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
});

export default withNavigation(ResultsList);
