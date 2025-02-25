import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { textState } from "./store/atoms/text";
import { charCountState } from "./store/selectors/character";

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <div>Character Count: {count}</div>;
}

const CharacterCounter = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};

export default CharacterCounter;