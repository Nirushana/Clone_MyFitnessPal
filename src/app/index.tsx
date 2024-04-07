import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FoodListItem } from "../components/FoodListItem";




export default function App() {
  return (
    <View style={styles.container}>
      {/* Food Items Container */}
      <FoodListItem items={{ Lable: "Pizza", Cal: "350", Brand: "Dominos" }} />
      <FoodListItem items={{ Lable: "Apple", Cal: "15", Brand: "Generic" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
    gap: 5
  },
});
