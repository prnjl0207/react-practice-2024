import { useState } from "react";

const Comp1 = (props) => {
  const { name, surname, city, state } = props.data;
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(" ");
  console.log("hey props", name);

  const counterHandler = () => {
    setCounter(counter + 1);
  };

  const inputOnChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value.toUpperCase());
  };

  const listItem = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k"];
  // const renderListItem = listItem.map((item) => {
  //   return <li>{item}</li>;
  // });
  return (
    <>
      <div>
        Hello Comp1 {name} {surname} {city} {state}
        <button onClick={() => counterHandler()}>Start Counter</button>
        <div>Count value is {counter}</div>
        <input type="text" value={inputValue} onChange={inputOnChange} />
        <div>
          List items is
          {/* <ul>{renderListItem}</ul> */}
          <ul>
            {listItem.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Comp1;
