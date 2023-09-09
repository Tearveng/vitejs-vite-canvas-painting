import './App.css';
import Canvas from './canvas/Canvas';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Canvas width={300} height={200} />
     
    </div>
  );
}

export default App;
