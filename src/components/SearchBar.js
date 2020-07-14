import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  //Taking the props as parameters. Object destructuring done from the props object.
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none" //autoCapitalize and autoCorrect should always be set none and false for search text inputs.
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term} //Passing the three props as objects.
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit} //When the user finishes typing and presses submit.
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#CDE1E9",
    height: 50,
    borderRadius: 12,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
