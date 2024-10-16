import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

//reactnagitaion an gelen parametre route içinde tutuluyor
export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`); // backenden gelen verileri responsta tutuyor
    setResult(response.data);
  };

  //sayfa açıldığında 1 kere rende r etsin diye
  useEffect(() => {
    getResult(id);
  }, []); //köşeli parantezi verirsek bunun içine yazdıımız kod 1 kere çalışır
  if (!result) {
    return null; //başlangıçta result olmadığı için get isteği atana kadar hata veriyordu
  }

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <View style={styles.icon}>
        {result.is_closed ? (
          <AntDesign name="closecircleo" size={30} color="black" />
        ) : (
          <MaterialIcons name="delivery-dining" size={30} color="black" />
        )}
      </View>

      {/* //eğer resteron kapalıysa(true )ise ilk ilon değil ise ikici ikon */}
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 180,
    margin: 10,
    borderRadius: 20,
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginVertical: 10,
  },
  phone: {
    alignSelf: "center",
    fontSize: 20,
  },
  icon: {
    alignSelf: "center",
  },
});
