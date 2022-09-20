import React,{useState} from "react";
import Title from './Title'
import Count from './Count'
import Button from './Button'

import "./style.css";

export default function App() {
  const [age,setAge] = useState(25)
  const [sal,setSal] = useState(500)
  const incAge = () =>
  {
    setAge(age+5)
  }
  const incSal = () =>
  {
    setSal(sal+500)
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Title />

      <Count text="Age" count={age} />
      <Button handleClick={incAge}>Inc Age</Button>
      <Count text="Salary" count={sal} />
      <Button handleClick={incSal}>Inc Sal</Button>


    </div>
  );
}
