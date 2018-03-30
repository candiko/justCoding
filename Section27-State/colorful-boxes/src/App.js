import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

// Box component - stateless
const Box = props => {
  const style = {
    display: "inline-block",
    margin: ".15% .25%",
    padding: "0",
    width: "120px",
    height: "120px",
    backgroundColor: props.boxColor
  };

  return <div style={style} />;
};

Box.propTypes = {
  boxColor: PropTypes.string.isRequired
};

class App extends Component {
  constructor(props) {
    super(props);

    const boxColors = Array(32)
      .fill()
      .map(() => App.defaultProps.allColors[Math.floor(Math.random() * 32)]);
    this.state = { boxColors: boxColors };

    setInterval(() => this.changeColor(), 300);
  }

  pickRandomColor() {
    const allColors = App.defaultProps.allColors;
    const newBoxColor = allColors[Math.floor(Math.random() * allColors.length)];
    return newBoxColor;
  }

  pickRandomBox() {
    const randomBoxIndex = Math.floor(Math.random() * 32);
    console.log();
    return randomBoxIndex;
  }

  changeColor() {
    const boxIndex = this.pickRandomBox();
    const boxColor = this.pickRandomColor();
    let boxColors = this.state.boxColors.slice();
    boxColors[boxIndex] = boxColor;
    this.setState({
      boxColors: boxColors
    });
  }

  render() {
    const boxes = Array(32)
      .fill()
      .map((box, index) => (
        <Box key={index} id={index} boxColor={this.state.boxColors[index]} />
      ));

    return <div>{boxes}</div>;
  }
}

App.defaultProps = {
  allColors: [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "Darkorange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen"
  ]
};

export default App;

/*
* Colorful Boxes
*   1. Box - show in page ========================== DONE
*   2. Define random color of the box with using props ==== DONE
*   3. State to change the box color
*   4. Make the changes with for every .3sec
*   5. Put some CSS
*/
