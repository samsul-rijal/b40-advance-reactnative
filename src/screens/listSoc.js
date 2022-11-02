import * as React from "react";
import { Text, Box, FlatList, Pressable } from "native-base";

// Add Props in Hello({navigation})
export default function Hello({ navigation }) {
  // Set Dummy Data with Array
  const socialMedia = ["Facebook", "Instagram", "Twitter"]

  // Make Function handle press to get value per list
  // const handlePres = (value) => {
  //   navigation.navigate("Detail Social", {value})
  // }

  return (
    <Box
      safeArea
      bg="primary.400"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      {/* Render Array With Flatlist */}

      <FlatList
        data={socialMedia}
        renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate("Detail Social", {item})}>
              <Text>{item}</Text>
            </Pressable>
        )}
      
      />
    </Box>
  );
}
