import React from "react";
import Lotto from "./Lotto";
import "./LottoReact.css";

const date = new Date();
const yyyy = date.getFullYear();
const mm = date.getMonth() + 1;
const dd = date.getDate();

class LottoReact extends React.Component {
  lottoObj = new Lotto(5, 6, 45);

  state = {
    lotto: this.lottoObj.str(),
  };

  clickHandler = (e) => {
    e.preventDefault();
    this.setState({ lotto: this.lottoObj.str() });
  };

  lottoToLines(lotto) {
    return lotto.split("\n").map((line, index) => (
      <span key={"line-" + index}>
        {line}
        <br />
      </span>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <div className="lottoStyle">
          <span>
            {yyyy}년 {mm}월 {dd}일
          </span>
          <hr />
          <span>{this.props.name}</span>
          <hr />
          <span>{this.lottoToLines(this.state.lotto)}</span>
        </div>
        <div className="buttonStyle">
          <button onClick={this.clickHandler}>로또 재발행</button>
        </div>
      </React.Fragment>
    );
  }
}

export default LottoReact;
