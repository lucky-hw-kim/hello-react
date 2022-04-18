import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const {reset} = props;
  return(
    <button onClick={reset}>
      {props.children}
    </button>
  )
};

const Application = () => {
  const [name, setName] = useState("");

  const reset = () => {
    console.log("reset");
    setName("")
  };

  function Hello(props) {
    return ((props.name && <h1>Hello {props.name}</h1>))
  }

  return (
    <main>
      <input onChange={(e) =>  setName(e.target.value) } value = {name} placeholder='Type your name'></input>
      <Button reset={reset}>Reset</Button>
      <Hello name={name}></Hello>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
