import React from "react";
import ReactDOM from "react-dom/client";
import Garage from "./Car";

const myFristElement = <h1>Hello World!</h1>;

const myArray = ["Suman", "Asish", "Mrinmay"];

const myList = myArray.map((item) => <p>{item}</p>);

const anotherElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>Suman</td>
    </tr>
    <tr>
      <td>Modak</td>
    </tr>
  </table>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);
