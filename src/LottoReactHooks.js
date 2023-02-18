import React, { useState } from "react";
import Lotto from "./Lotto01";
import "./LottoReact.css";

const date = new Date();
const yyyy = date.getFullYear();
const mm = date.getMonth() + 1;
const dd = date.getDate();

function lottoToLines(lotto) {
  return lotto.split("\n").map((row, index) => (
    <span key={"line-" + index}>
      {row} <br />
    </span>
  ));
}

function LottoReactHooks({ name }) {
  const [lotto, setLotto] = useState(new Lotto().str());

  const handleClick = (event) => {
    event.preventDefault();
    setLotto(new Lotto().str());
  };

  return (
    <>
      <div className="lottoStyle">
        <span>
          {yyyy}년 {mm}월 {dd}일
        </span>
        <hr />
        <span>{name}</span>
        <hr />
        <span>{lottoToLines(lotto)}</span>
      </div>
      <div className="buttonStyle">
        <button onClick={handleClick}>로또 재발행</button>
      </div>
    </>
  );
}

export default LottoReactHooks;
