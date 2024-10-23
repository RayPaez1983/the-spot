import React, { useReducer } from "react";
import { View } from "react-native";
import ColorCounter from "../commons/ColorCounter";

const COLOR_INCREASE = 15;
const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
      break;
    default:
      break;
  }
};
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCounter
        color="red"
        onClickIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREASE })
        }
        onClickDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREASE })
        }
      />
      <ColorCounter
        color="blue"
        onClickIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREASE })
        }
        onClickDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREASE })
        }
      />
      <ColorCounter
        color="green"
        onClickIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREASE })
        }
        onClickDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREASE })
        }
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
