import "./styles.css";
import Comp1 from "./components/Comp1";
import UseEffect from "./components/UseEffect";

export default function App() {
  const data = {
    name: "pranjal",
    surname: "verma",
    city: "greno",
    state: "up",
  };
  return (
    <div className="App">
      <h1>React Practice 2024</h1>
      <Comp1 data={data} />
      <UseEffect />
    </div>
  );
}
