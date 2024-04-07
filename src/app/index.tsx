import React, {useState} from "react";
import { StyleSheet, View, FlatList, TextInput, Button } from "react-native";
import { FoodListItem } from "../components/FoodListItem";

const FoodItems = [
  { Lable: "Pizza", Cal: "350", Brand: "Dominos" },
  { Lable: "Apple", Cal: "55", Brand: "Generic" },
  { Lable: "Coffee", Cal: "100", Brand: "Americano" }
]

export default function App() {
  const [search, setSearch] = useState("");

  const performSerch = () => {
    console.log("Searching for: " + search);
    setSearch("");
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search..." value={search} onChangeText={setSearch} style={styles.input}/>
      {search &&<Button title="Search" onPress={performSerch} />}
      <FlatList
        data={FoodItems}
        renderItem={({ item }) => <FoodListItem items={item} />}
        contentContainerStyle={{ gap: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10
  }
});
