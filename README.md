# React canvas draw

Is a library for react js that's you can draw by using only canvas and also come with event you can save or download the canvas in image or value to preview.

## Installation

Install my-project with **npm** or **yarn**

```bash
  npm install @veng-t/react-canvas-draw
  yarn @veng-t/react-canvas-draw
```

## Demo

Below is a demo for using **react-canvas draw**

## Usage/Examples

```javascript
import { Canvas } from "./@veng-t/react-canvas-draw";

<Canvas width={1000} height={500} />;
```

This will render a canvas with width `1000` and height `500` you can modify the value you want.

```javascript
<Canvas
  width={1000}
  height={500}
  paintColor={#fff}
/>
```

Here you can modify the paint/draw color: `#000000`

#### Event trigger

```javascript
<Canvas
  width={1000}
  height={500}
  paintColor={#fff}
  buttonComponent={(e) => <button onClick={e}>Save</button>}
/>
```

`buttonComponent` prop accept void function return as JSX element which you can pass any html tag or other framework component as you wish. this event is to save the canvas we have created.

```javascript

const getImg = (e: () => string | undefined) => {
    if (e) {
      console.log(e);
    }
  };

<Canvas
  width={1000}
  height={500}
  paintColor={#fff}
  submitComponent={(e) => (
    <button onClick={() => getImg(e)}>Submit</button>
  )}
/>
```

`submitComponent` prop return value as string ( base64 ) image to review or render somewhere as you wish.

## Authors

- [@veng-tear](https://github.com/Tearveng)

## License

[MIT](https://choosealicense.com/licenses/mit/)
