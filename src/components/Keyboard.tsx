import * as React from "react";
import Button from "./Button";
import { View, Text, StyleSheet } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { Colours } from "../styles/Colours";
import { ShakeEventExpo } from "./Shake";

export default function Keyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operator, setOperator] = React.useState("");
  const [result, setResult] = React.useState<Number | null>(null);
  const [display, setDisplay] = React.useState("");

  const handleNumber = (buttonValue: string) => {
    if (operator) {
      if (secondNumber.length < 10) {
        setSecondNumber(secondNumber + buttonValue);
        setDisplay(secondNumber + buttonValue);
      }
    } else {
      if (firstNumber.length < 10) {
        setFirstNumber(firstNumber + buttonValue);
        setDisplay(firstNumber + buttonValue);
      }
    }
  };

  const handleOperator = (buttonValue: string) => {
    setOperator(buttonValue);
    setSecondNumber("");
    setDisplay(firstNumber + buttonValue);
  };

  const clear = () => {
    if (operator === "") {
      setFirstNumber("");
      setDisplay("");
    }
    setSecondNumber("");
    setOperator("");
    setResult(null);
  };
  React.useEffect(() => {
    ShakeEventExpo.addListener(() => {
      clear();
    });

    return () => {
      ShakeEventExpo.removeListener();
    };
  }, []);

  const getResult = () => {
    let res;
    switch (operator) {
      case "+":
        res = parseInt(firstNumber) + parseInt(secondNumber);
        break;
      case "-":
        res = parseInt(secondNumber) - parseInt(firstNumber);
        break;
      case "*":
        res = parseInt(firstNumber) * parseInt(secondNumber);
        break;
      case "/":
        res = parseInt(secondNumber) / parseInt(firstNumber);
        break;
      default:
        res = 0;
        break;
    }
    clear();
    setFirstNumber(res.toString());
    setResult(res);
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result < 99999
              ? [Styles.screenFirstNumber, { color: Colours.result }]
              : [
                  Styles.screenFirstNumber,
                  { fontSize: 50, color: Colours.result },
                ]
          }
        >
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>
            {operator}
          </Text>
        </Text>
        {firstNumberDisplay()}
      </View>
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
    </View>
  );
}
