import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";

export const FoodListItem = ({ items }) => {
    return (
      <View
        style={{
          backgroundColor: "gainsboro",
          padding: 10,
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{items.Lable}</Text>
          <Text style={{ color: "dimgray" }}>
            {items.Cal} cal, {items.Brand}
          </Text>
        </View>
        <AntDesign name="pluscircleo" size={24} color="royalblue" />
      </View>
    );
  };