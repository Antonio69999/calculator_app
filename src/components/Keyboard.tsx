import * as React from "react";
import Button from "./Button";
import { View, Text, StyleSheet } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { Colours } from "../styles/Colours";
// import RNShake from "react-native-shake";

export default function Keyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operator, setOperator] = React.useState("");
  const [result, setResult] = React.useState<Number | null>(null);

  const handleNumber = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperator = (buttonValue: string) => {
    setOperator(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
    setResult(null);
  };

  const getResult = () => {
    switch (operator) {
      case "+":
        clear();
        setResult(parseInt(firstNumber) + parseInt(secondNumber));
        break;
      case "-":
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "*":
        setResult(parseInt(firstNumber) * parseInt(secondNumber));
        break;
      case "/":
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  //   React.useEffect(() => {
  //     const clearShake = RNShake.addListener(clear);

  //     // Cleanup function
  //     return () => {
  //       clearShake.remove();
  //     };
  //   }, []);

  return (
    <>
      <View style={Styles.row}>
        <Button title="C" isGray onPress={clear} />
        <Button title="+/-" isGray onPress={() => handleOperator("+/-")} />
        <Button title="％" isGray onPress={() => handleOperator("％")} />
        <Button title="÷" isBlue onPress={() => handleOperator("/")} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumber("7")} />
        <Button title="8" onPress={() => handleNumber("8")} />
        <Button title="9" onPress={() => handleNumber("9")} />
        <Button title="×" isBlue onPress={() => handleOperator("*")} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumber("4")} />
        <Button title="5" onPress={() => handleNumber("5")} />
        <Button title="6" onPress={() => handleNumber("6")} />
        <Button title="-" isBlue onPress={() => handleOperator("-")} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumber("1")} />
        <Button title="2" onPress={() => handleNumber("2")} />
        <Button title="3" onPress={() => handleNumber("3")} />
        <Button title="+" isBlue onPress={() => handleOperator("+")} />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => handleNumber(".")} />
        <Button title="0" onPress={() => handleNumber("0")} />
        <Button
          title="⌫"
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
        <Button title="=" isBlue onPress={() => getResult()} />
      </View>
    </>
  );
}
