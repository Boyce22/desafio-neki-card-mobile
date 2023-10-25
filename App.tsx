import PrivateRoutes from "./src/routes/private.routes";
import { ThemeProvider } from "styled-components/native";
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light, useFonts } from "@expo-google-fonts/roboto";

import theme from "./src/theme";
import { StatusBar } from "react-native";
import { Loading } from "./src/components/Loading";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import { AppRoutes } from "./src/routes/AppRoutes";
export default function App() {

  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light });

  return (
    <>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <StatusBar
            barStyle={"dark-content"}
            backgroundColor={"transparent"}
          />
          {fontLoaded ? <AppRoutes/> : <Loading />}
        </ThemeProvider>
      </AuthContextProvider>
    </>
  );
}
