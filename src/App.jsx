import React, { useState, useEffect } from "react";
import image from "../src/images-removebg-preview.png";
import "./App.css";
export default function App() {
  const [left, setLeft] = useState(100);
  useEffect(() => {
    const interval = setInterval(() => {
      setLeft((prevLeft) => {
        scrollTo(prevLeft + 2 - 100, 0);
        return prevLeft + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      onKeyDown={(event) => {
        console.log(event);
      }}
      tabIndex={0}
      style={{
        height: "100vh",
        width: "20000vw",
        background:
          'url("https://static.vecteezy.com/system/resources/previews/013/789/809/non_2x/landscape-cartoon-scene-with-green-hills-and-white-cloud-in-summer-blue-sky-background-vector.jpg")',
        backgroundSize: "contain",
      }}
    >
      <img
        style={{
          width: 250,
          height: 200,
          marginTop: 20,
          marginLeft: left,
        }}
        src={image}
      />
    </div>
  );
}
