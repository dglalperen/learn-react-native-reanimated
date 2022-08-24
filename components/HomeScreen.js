import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import PanGesture from "./PanGesture";
import Test from "./Test";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { Screen } from "react-native-screens";
import { useNavigation } from "@react-navigation/native";

const screens = [
  { id: 1, name: "Pan Gesture" },
  { id: 2, name: "Test" },
];

function RowItem({ item }) {
  const navigation = useNavigation();

  const { name } = item;
  return (
    <TouchableOpacity
      style={{
        width: Screen.width,
        height: 45,
        backgroundColor: "white",
        justifyContent: "center",
        marginBottom: 5,
        alignItems: "center",
      }}
      onPress={() => navigation.navigate(name)}
    >
      <Text style={{ fontSize: 20, fontWeight: "400" }}>{name}</Text>
    </TouchableOpacity>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "lightblue" }}>
      <FlatList
        data={screens}
        renderItem={({ item }) => <RowItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
