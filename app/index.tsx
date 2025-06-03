import { Text, View } from "react-native";
import EmberMind from "./EmberMind/EmberMind";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EmberMind />
    </View>
  );
}
