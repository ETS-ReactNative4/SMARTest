import React, { Component } from "react";

import { TitleText, Box, GreenBlockButton, TextBox } from "./Styles";

class TestSelection extends Component {
  static navigationOptions = {
    title: "Select Test"
  };
  render() {
    return (
      <Box>
        <TitleText>SELECT A TEST BELOW</TitleText>
        <TextBox />
        <GreenBlockButton onPress={() => this.props.navigation.navigate("TestSetup")} >
          INSTI HIV & SYPHILLIS TEST
        </GreenBlockButton>
      </Box>
    );
  }
}

export { TestSelection };
