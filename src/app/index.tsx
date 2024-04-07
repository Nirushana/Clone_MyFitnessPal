import { StyleSheet, View, FlatList } from "react-native";
import { FoodListItem } from "../components/FoodListItem";

const FoodItems = [
  { Lable: "Pizza", Cal: "350", Brand: "Dominos" },
  { Lable: "Apple", Cal: "55", Brand: "Generic" },
  { Lable: "Coffee", Cal: "100", Brand: "Americano" }
]

export default function App() {
  return (
    <View style={styles.container}>
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
});
