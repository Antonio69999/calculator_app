import { StyleSheet } from "react-native";
import { Colours } from "./Colours";

export const Styles = StyleSheet.create({
  // Button
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: Colours.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: Colours.btnDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: Colours.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: Colours.btnGray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  smallTextLight: {
    fontSize: 32,
    color: Colours.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: Colours.black,
  },
  // Keyboard
  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },
  viewBottom: {
    position: "absolute",
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 96,
    color: Colours.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 40,
    color: Colours.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
});
