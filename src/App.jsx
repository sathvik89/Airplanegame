import React, { useState, useEffect, useRef } from "react";
import image from "../src/images-removebg-preview.png";
import "./App.css";
export default function App() {
  const [left, setLeft] = useState(100);
  const [top, setTop] = useState(0);
  const planeRef = useRef();
  useEffect(() => {
    const interval = setInterval(() => {
      setLeft((prevLeft) => {
        scrollTo(prevLeft + 2 - 100, 0);
        return prevLeft + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      onKeyDown={(event) => {
        if (event.code === "ArrowUp") {
          planeRef.current.style.rotate = "-25deg";
          setTop((prev) => {
            if (prev > 0) {
              return prev - 4;
            } else {
              return prev;
            }
          });
        } else if (event.code === "ArrowDown") {
          planeRef.current.style.rotate = "25deg";
          setTop((prev) => {
            if (prev <= 196) {
              return prev + 4;
            } else {
              return prev;
            }
          });
        } else if (event.code === "ArrowLeft") {
          planeRef.current.style.rotate = "180deg";
          setLeft((prev) => {
            if (prev > 0) {
              return prev - 4;
            } else {
              return prev;
            }
          });
        } else if (event.code === "ArrowRight") {
          planeRef.current.style.rotate = "360deg";
          // setLeft((prev) => {
          //   if (prev <= 196) {
          //     return prev + 4;
          //   } else {
          //     return prev;
          //   }
          // });
        }
      }}
      tabIndex={0}
      style={{
        // position: "relative",
        height: "100vh",
        width: "20000vw",
        background:
          'url("https://static.vecteezy.com/system/resources/previews/013/789/809/non_2x/landscape-cartoon-scene-with-green-hills-and-white-cloud-in-summer-blue-sky-background-vector.jpg")',
        backgroundSize: "contain",
      }}
    >
      <img
        ref={planeRef}
        style={{
          width: 250,
          height: 200,
          marginTop: top,
          marginLeft: left,
        }}
        src={image}
      />
    </div>
  );
}
