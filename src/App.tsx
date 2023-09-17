import React from "react";
import { Canvas } from "./components/canvas/Canvas";

function App() {
  const [img, setImg] = React.useState<string>();

  const getImg = (e: () => string | undefined) => {
    if (e) {
      setImg(e());
    }
  };
  return (

    <Canvas
      width={1000}
      height={500}
      paintColor="#fff"
      buttonComponent={(e) => <button onClick={e}>Save</button>}
      submitComponent={(e) => (
        <button onClick={() => getImg(e)}>Submit</button>
      )}
    />
  );
}

export default App;
