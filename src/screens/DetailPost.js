import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios

const PostDetail = (props) => {

  console.log(props);

  const [products, setProducts] = useState([])


  const getProducts = async() => {
    try {
      const response = await axios.get(`https://api.kontenbase.com/query/api/v1/09c6558b-c159-4430-a53b-93febb96bca5/products/${props.route.params}`)
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
      <Text h2 style={{ fontWeight: "bold" }}>
        This Is Post Detail
      </Text>
      <Text>{products.name}</Text>
      <Text>{products.price}</Text>
    </View>
  );
};

export default PostDetail;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    flex: 1,
  },
});
