import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ResultDetail from "./ResultDetail";
import { useNavigation } from "@react-navigation/native"; //yönlendirme için

export default function ResultsList({ title, results }) {
  const navigation = useNavigation();
  console.log(results);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false} //scrol kapatmak için
        data={results}
        renderItem={({ item }) => {
          return (
            // tıklandığında farklı bir sayfaya yönkendirmek için
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultShow", { id: item.id })}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold", //yazının kalınlığı artar
    marginLeft: 10,
    marginBottom: 5,
  },
});
