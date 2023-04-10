import React, { useState } from "react";
import styled from "./Table.module.css";
const generateRandom = () => {
  const random = Math.floor(Math.random() * 1000);
  return random;
};
const Table = () => {
  const [number, setNumber] = useState([]);
  const handleClick = () => {
    setNumber([...number, generateRandom()]);
  };
  return (
    <>
      <h1>RANDOM VALUE TABLE</h1>
      <div className={styled.container}>
        <div className={styled.left}>
          <table cellspacing="10px solid black" cellpadding="10px" border="2px">
            <thead>
              <tr>
                <th> SL No </th>
                <th> RANDOM VALUE</th>
              </tr>
            </thead>
            <tbody>
              {number.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styled.right}>
          <button onClick={handleClick}>CLICK ME</button>
        </div>
      </div>
    </>
  );
};
export default Table;
