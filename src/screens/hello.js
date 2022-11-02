import * as React from "react";
import { Box } from "native-base";
import { TouchableOpacity } from "react-native";
import { Pressable, Text } from "react-native";

// Add Props in Hello({navigation})
export default function Hello({navigation}) {
  return (
    <Box bg="primary.400" flex={1} alignItems="center" justifyContent="center">
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Life's too short
      </Text>

      {/* Create Button */}
      <TouchableOpacity onPress={()=> navigation.navigate("IncDec")}
        style={{
          backgroundColor: "pink",
          padding: 10,
          borderRadius: 5
        }}
      
      >
        <Text>Navigate to IncDec</Text>
      </TouchableOpacity>
    </Box>
  );
}
