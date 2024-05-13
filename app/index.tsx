import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./HomeScreen/HomeScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}
