import React from "react";
import { Text, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend1" },
    { name: "Friend2" },
    { name: "Friend3" },
    { name: "Friend4" },
    { name: "Friend5" },
    { name: "Friend6" },
  ];
  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

export default ListScreen;
