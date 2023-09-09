import React from "react";
import "./App.css";
import Canvas from "./components/canvas/Canvas";

function App() {
  const [img, setImg] = React.useState<string>();

  const getImg = (e: () => string | undefined) => {
    if (e) {
      setImg(e());
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Canvas
        width={1000}
        height={500}
        buttonComponent={(e) => <button onClick={e}>Save</button>}
        submitComponent={(e) => (
          <button onClick={() => getImg(e)}>Submit</button>
        )}
      />
      <img src={img} />
    </div>
  );
}

export default App;
