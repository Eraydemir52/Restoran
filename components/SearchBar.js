import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.backroundStyle}>
      <AntDesign
        style={styles.iconStyle}
        name="search1"
        size={30}
        color="black"
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Ara"
        autoCorrect="false" //düzeltmler kaltı
        autoCapitalize="none" //başlangıçta büyük harfle başlamaz
        value={term}
        onChangeText={onTermChange} //inputa yazdığım değer
        onEndEditing={onTermSubmit} // işim bittiğinde(inputtaki yazma bittiğinde) bunu tetiklem
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backroundStyle: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    margin: 10,
    height: 50,
    alignItems: "center",
    borderRadius: 20,
  },
  iconStyle: {
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1, //inputun tamamını kapsadı
    fontSize: 18,
  },
});
