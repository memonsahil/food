import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native"; //ScrollView enables automatic scrolling if elements within it exceed the viewable area.
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState(""); //State to update and render the search term.
  const [searchApi, results, errorMessage] = useResults();

  console.log(results);
  //console.log(props); Can help find the relavant props needed from the props object.

  const filterResultsByPrice = (price) => {
    //Helper function used to filter the obtained results based on their price value.
    //price === '£' || '££' || '£££'
    return results.filter((result) => {
      //Returns the filtered results list.
      return result.price === price; //Return the result, if its price is equal to the price argument's value.
    });
  };

  return (
    //Flex value of 1 allows the element to take up 100% of the viewable area.
    //<View style = {{ flex: 1 }}>...</View> Alternatively,
    //an empty tag can be used for grouping multiple elements within without any concern of their occupation of the viewable area.
    <>
      <SearchBar
        term={term} //Passing three props from the parent component to the child component (SearchBar).
        onTermChange={setTerm} //Same as newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)} //Passing the helper function.
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective (£)"
          results={filterResultsByPrice("£")} //Passing the helper function to get the filtered resuts.
        />
        <ResultsList
          title="Bit Pricier (££)"
          results={filterResultsByPrice("££")}
        />
        <ResultsList
          title="Big Spender (£££)"
          results={filterResultsByPrice("£££")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
