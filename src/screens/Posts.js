import axios from "axios";
import { isLoading } from "expo-font";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios

const Posts = (props) => {
  //Init State

  const [products, setProducts] = useState([])


  const getProducts = async() => {
    try {
      const response = await axios.get("https://api.kontenbase.com/query/api/v1/09c6558b-c159-4430-a53b-93febb96bca5/products")
      console.log(response.data);
      setProducts(response.data)
      
    } catch (error) {
      console.log(error);
    }
  }
  // Create LifeCycle
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <View style={style.container}>
      <View>
        <Text>This Is Products</Text>

        {/* <Button
          title="To Detail Post"
          onPress={() => props.navigation.navigate("DetailPost")}
        /> */}
        
        <FlatList
          data={products}
          renderItem={({item}) => (
            <View>
              <View style={{backgroundColor: "grey", margin: 10}} >
                <Text onPress={() => props.navigation.navigate("DetailPost", item._id)}>
                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
                </Text>
              </View>
            </View>
          )}
          // keyExtractor={(item) => item._id}
          refreshing={isLoading}

        />
      </View>
    </View>
  );
};

export default Posts;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
