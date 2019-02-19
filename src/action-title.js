import React, { Component } from "react";
import { Text, Text2, Outer, Inner, WordWrapper, LetterWrapper } from "./style";

class ActionTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const fontSize = this.props.fontSize ? this.props.fontSize : 5;
    const text = this.props.text ? this.props.text : "Add text";
    return (
      <div>
        <Outer fontSize={fontSize}>
          <Inner>
            <WordWrapper>{this.LetterMaker(text, fontSize)}</WordWrapper>
          </Inner>
        </Outer>
      </div>
    );
  }

  LetterMaker = (word, fontSize) => {
    const wordArray = word.split("");
    const htmlToReturn = wordArray.map((item, index) => {
      console.log(item);
      return (
        <LetterWrapper fontSize={fontSize}>
          <Text2 fontSize={fontSize}>
            {item !== " " ? item : <span>&nbsp;</span>}
          </Text2>
          <Text fontSize={fontSize}>
            {item !== " " ? item : <span>&nbsp;</span>}
          </Text>
        </LetterWrapper>
      );
    });
    return htmlToReturn;
  };
}
export default PrettyTitle;
